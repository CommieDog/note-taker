const express = require("express");
const fs = require("fs");

const api = express.Router();

api.get("/notes", (req, res) =>
{
    console.log("GET api//notes hit!");
    res.send("Responding to GET!")
});

api.post("/notes", (req, res) =>
{
    console.log("POST api//notes hit!");
    res.send("Responding to POST!")
})

module.exports = api;