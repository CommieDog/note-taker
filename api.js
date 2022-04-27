const express = require("express");
const fs = require("fs");

const api = express.Router();

api.use(express.json());

api.get("/notes", (req, res) =>
{
    console.log("GET api//notes hit!");
    fs.readFile(__dirname + "/db/db.json", "UTF-8", (err, file) =>
    {
        if(err)
        {
            console.error(err);
            res.json("Error reading notes on server");
        }
        else
        {
            file = JSON.parse(file);
            res.json(file);
        }
    });
});

api.post("/notes", (req, res) =>
{
    console.log("POST api//notes hit!");
    res.send("Responding to POST!");
})

module.exports = api;