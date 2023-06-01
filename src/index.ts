import express, { Application, Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";

const app: Application = express();

//using cors
app.use(cors());

//parse data
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const { URI } = process.env;
const port = process.env.PORT || 5000;

const dbConnect = async (): Promise<void> => {
  if (!URI) {
    throw new Error("URI is not defined");
  }
  await mongoose.connect(URI).then(() => console.log("Database connected"));
};

dbConnect();

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
