const express = require("express");
const port = process.env.PORT || 4000;
const imageRouter = require("./image/router");
const cors = require("cors");
const bodyParser = require("body-parser");
const auth = require("./auth/router");

const app = express();

const corsMiddleware = cors();
app.use(corsMiddleware);

const parserMiddleware = bodyParser.json();
app.use(parserMiddleware);

app.use(imageRouter);
app.use(auth);

app.listen(port, () => console.log(`Hey there, I'm listening on port ${port}`));
