import "dotenv/config";
import express from "express";
import { fhirAPIQuery } from "../utils/fhirAPIQuery.js";

const diagnosticReportsRouter = express.Router();

diagnosticReportsRouter.get("/", (req, res, next) => {
  const request = "/DiagnosticReport";
  const requestType = "GET";

  fhirAPIQuery(request, requestType, res);
});

export default diagnosticReportsRouter;
