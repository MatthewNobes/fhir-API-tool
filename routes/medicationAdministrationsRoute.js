import "dotenv/config";
import express from "express";
import { fhirAPIQuery } from "../utils/fhirAPIQuery.js";

const medicationAdministrationsRouter = express.Router();

medicationAdministrationsRouter.get("/", (req, res, next) => {
  const request = "/MedicationAdministration";
  const requestType = "GET";

  fhirAPIQuery(request, requestType, res);
});

medicationAdministrationsRouter.get("/:searchID", (req, res, next) => {
  const searchID = req.params.searchID;
  const request = "/MedicationAdministration?patient=" + searchID;

  const requestType = "GET";

  fhirAPIQuery(request, requestType, res);
});

export default medicationAdministrationsRouter;
