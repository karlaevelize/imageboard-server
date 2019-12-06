const express = require("express");
const app = express();
const port = process.env.PORT || 4000;
const db = require("./db");
const Image = require("./image/model");

app.listen(port, () => console.log(`Hey there, I'm listening on port ${port}`));
