const express = require("express");
const fs = require("fs");
const { v1: uuidv1 } = require("uuid"); // V1 is a deterministic approach to UUID generation based on MAC address and timestamp

const api = express.Router();

api.use(express.json());

api.get("/notes", (req, res) =>
{
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
    let note = req.body;
    note.id = uuidv1();
    res.json(note);
})

module.exports = api;