import "dotenv/config";
import express from "express";
import { fhirAPIQuery } from "../utils/fhirAPIQuery";

const medicationRouter = express.Router();

medicationRouter.get("/", (req, res, next) => {
  const request = "/Medication";
  const requestType = "GET";

  fhirAPIQuery(request, requestType, res, '');
});

export default medicationRouter;
