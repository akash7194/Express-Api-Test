// const MongoClient = require('mongodb').MongoClient

// class Connection {

//     static async open() {
//         if (this.db) return this.db
//         this.db = await MongoClient.connect(this.url, this.options,(err,dbc) =>{
//             if(err)
//             console.log(err);
//             else
//             console.log(dbc.db('testusercollection').collection('users').find({}));
//             this.db=dbc;
//         })

//         console.log(this.db.db('testusercollection'));
//         return this.db

//     }

// }

// Connection.db = null
// Connection.url = 'mongodb://localhost:27017/testusercollection'
// Connection.options = {
//     bufferMaxEntries:   0,

//     useNewUrlParser:    true,
//     useUnifiedTopology: true,
// }

// module.exports = { Connection }