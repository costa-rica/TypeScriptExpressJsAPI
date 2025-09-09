import express from "express";
import type { Request, Response } from "express";

const app = express();
const port = 3000;

import indexRouter from "./routes/index";
import usersRouter from "./routes/users";


app.use("/users", usersRouter);
app.use("/", indexRouter);


app.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port}`);
});