const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const imageRouter = require("./image/router");
const authRouter = require("./auth/router");
const userRouter = require("./user/router");

const port = process.env.PORT || 4000;
const app = express();

const corsMiddleware = cors();
const parserMiddleware = bodyParser.json();

app.use(corsMiddleware);
app.use(parserMiddleware);

app.use(imageRouter);
app.use(authRouter);
app.use(userRouter);

app.listen(port, () => console.log(`Hey there, I'm listening on port ${port}`));
