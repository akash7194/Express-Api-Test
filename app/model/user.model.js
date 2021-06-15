// module.exports = mongoose => {
//     var schema =
//       mongoose.Schema(
//         {
//           FullName: String,
//           Gender: String,
//           State: String,
//           Password: String,
//          Role: String

//         },
//         { timestamps: true }

//     );
//     schema.method("toJSON", function() {
//         const { __v, _id, ...object } = this.toObject();
//         object.id = _id;
//         return object;
//       });

//       const User = mongoose.model("User", schema);
//     return User;
//   };

const mongoose = require('mongoose');


  const schema=mongoose.Schema(
      {
        FullName: String,
        Gender: String,
        State: String,
        Password: String,
        Role: String,
        Status: Boolean
      },
      { timestamps: true }
    );
  
    
  module.exports =mongoose.model(
    "users",
    schema
);