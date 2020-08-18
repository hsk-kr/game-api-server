import express from "express";
import * as dotenv from "dotenv";

dotenv.config();

const app = express();

// middleware setting
import cors from "cors";
import helmet from "helmet";

app.use(express.json());
app.use(cors());
app.use(helmet());

// routes
import AuthRouter from "./routers/api/auth.router";
app.use("/api/auth", AuthRouter);

// app.get("/", (req, res) => res.send("test"));

app.listen(process.env.SERVER_PORT, () => {
  console.log(`SN Server Started : ${process.env.SERVER_PORT}`);
});
