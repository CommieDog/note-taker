const express = require("express");
const fs = require("fs");
const { v1: uuidv1 } = require("uuid"); // V1 is a deterministic approach to UUID generation based on MAC address and timestamp

const api = express.Router();

api.use(express.json());

api.get("/notes", (req, res) =>
{
    fs.readFile(__dirname + "/db/db.json", "utf-8", (err, file) =>
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
    // The tricky part: read the JSON from the file, append the note to the JSON object, and write the JSON back to the file
    fs.readFile(__dirname + "/db/db.json", "utf-8", (error, data) =>
    {
        if(error)
        {
            console.error(error);
            res.json("Error reading note file on server");
        }
        else
        {
            data = JSON.parse(data);
            data.push(note);
            data = JSON.stringify(data);
            fs.writeFile(__dirname + "/db/db.json", data, (error) =>
            {
                if(error)
                {
                    console.error(error);
                    res.json("Error saving to note file on server");
                }
                else
                {
                    console.log(data);
                    res.json(note);
                }
            });
        }
    });
})

module.exports = api;