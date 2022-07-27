import express from "express";
import cors from "cors";
import {
  patientsRouter,
  medicationRouter,
  appointmentsRouter,
  immunisationsRouter,
  conditionsRouter,
  medicationAdministrationsRouter,
  diagnosticReportsRouter,
  specimensRouter,
  familyHistoryRouter,
  observationsRouter,
} from "./routes/index.js";

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
app.use("/medicationAdministrations", medicationAdministrationsRouter);
app.use("/diagnosticReports", diagnosticReportsRouter);
app.use("/specimens", specimensRouter);
app.use("/familyHistory", familyHistoryRouter);
app.use("/observations", observationsRouter);
