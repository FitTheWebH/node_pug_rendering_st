import express from "express";
import dotenv from "dotenv";
dotenv.config();
import morgan from "morgan";
import mainRouter from "./router/MainRouter";
import aboutRouter from "./router/AboutRouter";
import solutionRouter from "./router/SolutionRouter";
import supportRouter from "./router/SupportRouter";

const app = express();

app.set(`port`, process.env.PORT || 7002);
app.set("view engine", "pug");
app.use(morgan(`dev`));

app.use("/", mainRouter);
app.use("/about", aboutRouter);
app.use("/solution", solutionRouter);
app.use("/support", supportRouter);

app.listen(app.get(`port`), () => {
  console.log(
    `🔥MongoDB Grapgql - Server Start PORT NUMBER :`,
    app.get(`port`)
  );
});
