var MongoClient = require('mongodb').MongoClient;

// Connect to the db
MongoClient.connect("mongodb://user1:Qwerty123@ds139942.mlab.com:39942/t20171", function (err, db) {

  db.collection('Persons', function (err, collection) {

    collection.insert({ id: 4, firstName: 'Anny', lastName: 'Jobs' });
    collection.insert({ id: 5, firstName: 'Andre', lastName: 'Simons' });
    collection.insert({ id: 6, firstName: 'Kate', lastName: 'Hudson' });
    collection.insert({ id: 7, firstName: 'Dm', lastName: 'Ver' });



    // collection.update(
    //   {id: 1},
    //   {
    //     $set: {
    //       firstName: 'James',
    //       lastName: 'Gosling'
    //     }
    //   },
    //   {w:1},
    //   function(err, result){
    //     if(err) throw err;
    //     console.log('Document Updated Successfully');
    //   }
    // );
    //
    // collection.deleteOne(
    //   {id:3},
    //   // {w:1},
    //   function(err, result){
    //     if(err) throw err;
    //     console.log('Document Removed Successfully');
    //   }
    // );

    collection.find().toArray(function(err, items) {
      if(err) throw err;
      console.log('Documents :', items);
    });

    collection.count(function (err, count) {
      if (err) throw err;
      console.log('Total Documments: ' + count);
    });




  });

//db.getCollectionNames
  db.listCollections().toArray(function(err, collections){
    if(err) throw err;
    console.log('Collections :', collections);
  });


  db.stats(function(err, stats) {
    if(err) throw err;
    console.log('DB status:', stats);
  });

  db.close();

});
