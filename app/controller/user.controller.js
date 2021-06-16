

// const Users = require("../model/user.model");

// // Create and Save a new User
// exports.create = (req, res) => {
//     try{
//     console.log(req);
//     if (!req.body) {
//         res.status(400).send({ message: "Content can not be empty!" });
//         return;
//     }

//     const user = new Users({
//         FullName: req.body.FullName,
//         Gender: req.body.Gender,
//         State: req.body.State,
//         Password: req.body.Password,
//         Role: req.body.Role,
//         Status: req.body.Status

//     });

//     user
//         .save(user)
//         .then(data => {
//             res.send(data);
//         })
//         .catch(err => {
//             res.status(500).send({
//                 message:
//                     err.message || "Some error occurred while creating the user."
//             });
//         });
//     }
//     catch(err)
//     {
//         console.log("error"+err);
//     }
// };



// exports.findAll = (req, res) => {
//     //const username = req.query.FullName;
//     // var condition = username ? {} : {};
// try{

    
// //console.log(Connection.open().db('usertestcollection').collection('users'));
    
    
//     Users.find({})
//         .then(data => {
//             res.send(data);
//         })
//         .catch(err => {
//             res.status(500).send({
//                 message:
//                     err.message || "Some error occurred while retrieving users."
//             });
//         });
//     }
//     catch(err)
//     {
//         console.log("error"+err);
//     }

//     // db.find({}, function(err, users) {
//     //     var userMap = {};

//     //     users.forEach(function(user) {
//     //       userMap[user._id] = user;
//     //     });
//     // if(err)
//     // {
//     //     res.send("Error")
//     // }
//     // else{
//     //     res.send(userMap);  
//     // }
//     //   });


// };

// // Find a  user with an specific gender
// module.exports.findGenderBased = async(req, res) => {
//     try{
//     console.log(req);
//     Users.find({ Gender: req.query.Gender })
//         .then(data => {
//             res.send(data);
//         })
//         .catch(err => {
//             res.status(500).send({
//                 message:
//                     err.message || "Some error occurred while retrieving users."
//             });
//         });
//     }
//     catch(err)
//     {
//         console.log("error"+err);
//     }

// };

// // Update a user by the id in the request
// module.exports.updateUser = async(req, res) => {
// try {
//     let fieldToUpdate = {
//         FullName: req.body.FullName,
//         Gender: req.body.Gender,
//         State: req.body.State,
//         Password: req.body.Password,
//         Status: req.body.Status,
//         Role: req.body.Role
//     };

//     for (const [key, value] of Object.entries(fieldToUpdate)) {
//         if (!value) {
//             delete fieldToUpdate[key];
//         }
//     }
//     console.log(fieldToUpdate);
//     //var name=req.body.FullName?req.body.FullName:undefined;
//     //console.log(name);
//     Users.updateOne({ _id: req.body.id }, {
//         $set: fieldToUpdate
//         // FullName: req.body.FullName,
//         // Gender: req.body.Gender,
//         // State: req.body.State,
//         // Password: req.body.Password,
//         // Status: req.body.Status,
//         // Role: req.body.Role

//     }, { //options
//         omitUndefined: false,
//         upsert: true
//     })
//         .then(data => {
//             res.send({
//                 message:
//                     data
//             });
//         })
//         .catch(err => {
//             res.status(500).send({
//                 message:
//                     err.message || "Some error occurred while retrieving users."
//             });
//         });
//     }
//     catch(err)
//     {
//         console.log("error"+err);
//     }
// };

// // Delete a user with the specified id in the request
// module.exports.delete = async(req, res) => {
//    try{
//     Users.deleteOne({ _id: req.body.id })
//         .then(data => {
//             res.send({
//                 message:
//                     "Sucessfuly Deleted the Entry"
//             });
//         })
//         .catch(err => {
//             res.status(500).send({
//                 message:
//                     err.message || "Some error occurred while retrieving users."
//             });
//         });
//     }
//     catch(err)
//     {
//         console.log("error"+err);
//     }
// };

// // Delete all user from the database.
// module.exports.deleteAll = async(req, res) => {

// };

// // Find all published user

