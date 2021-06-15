

const Task = require("../model/task.model");

// Create and Save a new User
exports.create = (req, res) => {
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

};
