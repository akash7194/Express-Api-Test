
const task = require("../controller/task.controller.js");
var router = require("express").Router();

router.post("/", task.create);

app.use('/api/task', router);