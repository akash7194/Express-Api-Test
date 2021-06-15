const express = require("express");
const cors = require("cors");

const app = express();

var corsOptions = {
    origin: "http://localhost:8080"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

//Database connecton establish
require("./app/routes/user.routes")(app);
//require("./app/routes/task.routes")(app);
//const db = require("./app/model");
// db.mongoose
//     .connect("mongodb://localhost:27017/testusercollection", {
//         useNewUrlParser: true
//     })
//     .then(() => {
//         console.log("Connected to the database!");
//     })
//     .catch(err => {
//         console.log("Cannot connect to the database!", err);
//         process.exit();
//     });
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/testusercollection', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
console.log(db);
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    // we're connected!
    console.log("connected");
});
// simple route
app.get("/", (req, res) => {
    res.json({ message: "Welcome to bezkoder application." });
});

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});