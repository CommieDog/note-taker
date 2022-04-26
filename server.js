const express = require("express");
const path = require('path');

const app = express();

const PORT = 3000;

app.use(express.static('public'));

app.get("/");

app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));
