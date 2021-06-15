
const mongoose = require('mongoose');


const schema = mongoose.Schema(
    {
        TaskName: String,
        Taskid: String,
        Description: String,

        assingedTo: String,
        Status: Number
    },
    { timestamps: true }
);


//return Task;
module.exports = mongoose.model(
    "taskmaps",
    schema
);