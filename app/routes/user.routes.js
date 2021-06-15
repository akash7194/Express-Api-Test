module.exports = app => {
    const user = require("../controller/user.controller.js");

    var router = require("express").Router();

    // Create a new user
    router.post("/", user.create);

    // Retrieve all user
    router.get("/", user.findAll);

    router.get("/gender", user.findGenderBased);

    router.delete("/", user.delete);

    router.patch("/update", user.updateUser)

    const task = require("../controller/task.controller.js");
    var router1 = require("express").Router();

    router1.post("/", task.create);

    app.use('/api/task', router1);
    app.use('/api/user', router);


};