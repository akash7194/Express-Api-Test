const express = require("express");
const cors = require("cors");
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const PORT = process.env.PORT || 8080;
const app = express();

var corsOptions = {
    origin: "http://localhost:8080"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

require("./app/routes/user.routes")(app);


//Database connecton establish

// Connection URL
const url = 'mongodb://localhost:27017/';

// Database Name
const dbName = 'testusercollection';

// Use connect method to connect to the server
MongoClient.connect(url,{useUnifiedTopology: true } ,function (err, client) {
    assert.equal(null, err);
    console.log('Connected successfully to server');

    const db = client.db(dbName);
    // storing for acesssing it later
    app.locals.db = db;
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}.`);
    });

});





app.get("/", (req, res) => {
    res.json({ message: "Welcome to bezkoder application." });
});

// set port, listen for requests
