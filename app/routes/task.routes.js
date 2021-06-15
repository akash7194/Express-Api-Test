
const task = require("../controller/task.controller.js");
var router = require("express").Router();

router.post("/", task.create);

router.get("/", task.create);

app.use('/api/task', router);