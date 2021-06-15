

const Task = require("../model/task.model");

// Create and Save a new User
exports.create = async(req, res) => {
    try{
    console.log(req);
    if (!req.body) {
        res.status(400).send({ message: "Content can not be empty!" });
        return;
    }

    const task = new Task({
        TaskName: req.body.TaskName,
        Taskid: req.body.Taskid,
        Description: req.body.Description,

        assingedTo: req.body.assingedTo,
        Status: req.body.Status

    });

    task
        .save(task)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the user."
            });
        });
    }
    catch(err)
    {
        console.log("error"+err);
    }

};
exports.findAll = async(req, res) => {
   try{
    Task.find({})
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving users."
            });
        });

    }
    catch(err)
    {
        console.log("error"+err);
    }


};

exports.updateTaskStatus = async(req, res) => {
   try{
    Task.updateOne({ _id: req.body.id }, {
       
        // FullName: req.body.FullName,
        // Gender: req.body.Gender,
        // State: req.body.State,
        // Password: req.body.Password,
         Status: req.body.Status,
        // Role: req.body.Role

    }, { //options
        omitUndefined: false,
        upsert: true
    })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving users."
            });
        });
    }
    catch(err)
    {
        console.log("error"+err);
    }

    //Task.findById(req.body.id)
 


};
