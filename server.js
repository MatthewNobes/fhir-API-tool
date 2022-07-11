import express from "express";
import cors from "cors";
import patientsRouter from "./routes/patientsRoute.js";

const app = express();

const port = 4444;

app.use(express.json());
app.use(cors());

app.listen(port, function () {
  console.log("Server is running on PORT:", port);
});

app.use("/patients", patientsRouter);
