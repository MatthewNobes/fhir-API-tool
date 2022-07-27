import "dotenv/config";
import express from "express";
import { fhirAPIQuery } from "../utils/fhirAPIQuery";

const observationsRouter = express.Router();

observationsRouter.get("/", (req, res, next) => {
  const request = "/Observation";
  const requestType = "GET";

  fhirAPIQuery(request, requestType, res, '');
});

export default observationsRouter;
