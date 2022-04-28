const express = require("express");
const path = require('path');
const api = require("./api");

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static('public'));

app.use("/api", api);

app.get("/notes", (req, res) =>
{
    res.sendFile(path.join(__dirname, '/public/', 'notes.html'));
});

// Wildcard route directs to index.html
app.get("*", (req, res) =>
{
    res.sendFile(path.join(__dirname, '/public/', 'index.html'));
});

app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));
