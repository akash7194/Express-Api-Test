module.exports = app => {
  
    var ObjectId = require('mongodb').ObjectID;
    var router = require("express").Router();
 
    // Create a new user
    router.post("/", async(req,res) =>{
        try {
    
            const db=req.app.locals.db;
            var user = {
                FullName: req.body.FullName,
                Gender: req.body.Gender,
                State: req.body.State,
                Password: req.body.Password,
                Role: req.body.Role,
                Status: req.body.Status
        
            };
            const users=db.collection('users').insertOne(user).then(results => {
                console.log(results)
                res.send(results)
              })
              .catch(error => console.error(error))
             
           
        } catch (error) {
            res.status(500).json({ errorda: error })
        }
    });
    // Retrieve all user
   // router.get("/", user.findAll);

router.get('/',async(req,res) =>{
    try {

        const db=req.app.locals.db;
        const users=db.collection('users').find().toArray()
        .then(results => {
          console.log(results)
          res.send(results)
        })
        .catch(error => console.error(error))
       
    } catch (error) {
        res.status(500).json({ errorda: error })
    }
});
    router.get("/gender" ,async(req,res) =>{
        const db=req.app.locals.db;
        const users=db.collection('users').find({ Gender: req.query.Gender }).toArray()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving users."
            });
        });
    });

    router.delete("/", async(req,res) =>{
        const db=req.app.locals.db;
        const users=db.collection('users').deleteOne({_id: new ObjectId(req.body.id )})
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving users."
            });
        });
    });
    router.patch("/update", async(req,res) =>{
        try {
    
            const db=req.app.locals.db;
            let fieldToUpdate = {
                FullName: req.body.FullName,
                Gender: req.body.Gender,
                State: req.body.State,
                Password: req.body.Password,
                Status: req.body.Status,
                Role: req.body.Role,
            Status: req.body.Status
        
            };
            for (const [key, value] of Object.entries(fieldToUpdate)) {
                if (!value) {
                    delete fieldToUpdate[key];
                }
            }
            var myquery = { _id: new ObjectId(req.body.id) };
            var newvalues = { $set: fieldToUpdate };
            const users=db.collection('users').updateOne(myquery, newvalues).then(results => {
                console.log(results)
                res.send(results)
              })
              .catch(error => console.error(error))
             
           
        } catch (error) {
            res.status(500).json({ errorda: error })
        }
    });

    const task = require("../controller/task.controller.js");
    var router1 = require("express").Router();

    router1.post("/",  async(req,res) =>{
        try {
    
            const db=req.app.locals.db;
            var  task = new Task({
                TaskName: req.body.TaskName,
                Taskid: req.body.Taskid,
                Description: req.body.Description,
        
                assingedTo: req.body.assingedTo,
                Status: req.body.Status
        
            });
            const users=db.collection('taskmaps').insertOne(task).then(results => {
                console.log(results)
                res.send(results)
              })
              .catch(error => console.error(error))
             
           
        } catch (error) {
            res.status(500).json({ errorda: error })
        }
    });
    router1.get("/", async(req,res) =>{
        try {
    
            const db=req.app.locals.db;
            const users=db.collection('taskmaps').find().toArray()
            .then(results => {
              console.log(results)
              res.send(results)
            })
            .catch(error => console.error(error))
           
        } catch (error) {
            res.status(500).json({ errorda: error })
        }
    });
    router1.patch("/updateStatus",async(req,res) =>{
        try {
    
             const db=req.app.locals.db;
            
            var myquery = { _id: new ObjectId(req.body.id) };
            var newvalues = { $set :{Status : req.body.Status} };
            const users=db.collection('taskmaps').updateOne(myquery, newvalues).then(results => {
                console.log(results)
                res.send(results)
              })
              .catch(error => console.error(error))
             
           
        } catch (error) {
            res.status(500).json({ errorda: error })
        }
    });

    app.use('/api/task', router1);
    app.use('/api/user', router);


};