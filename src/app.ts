import express, { Application, Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
import { dbConnect } from "./app/utils/dbConnect";

const app: Application = express();

//using cors
app.use(cors());

//parse data
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//render ejs

app.set("view engine", "ejs");

//db connection
dbConnect();

//we will import all routes here
import productRoute from "./app/modules/product/product.router";

//here will be default route
app.get("/", (req: Request, res: Response) => {
  res.render("index");
});

//custom routs path
app.use("/api/v1/product", productRoute);

export { app };
