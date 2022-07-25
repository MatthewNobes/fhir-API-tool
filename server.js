import express from "express";
import cors from "cors";
import patientsRouter from "./routes/patientsRoute.js";
import medicationRouter from "./routes/medicationRoute.js";
import appointmentsRouter from "./routes/appointmentsRoute.js";
import immunisationsRouter from "./routes/immunisationsRoute.js";
import conditionsRouter from "./routes/conditionsRoute.js";

const app = express();

const port = 4444;

app.use(express.json());
app.use(cors());

app.listen(port, function () {
  console.log("Server is running on PORT:", port);
});

app.use("/patients", patientsRouter);
app.use("/medication", medicationRouter);
app.use("/appointments", appointmentsRouter);
app.use("/immunisations", immunisationsRouter);
app.use("/conditions", conditionsRouter);
