import "dotenv/config";
import express from "express";
import { fhirAPIQuery } from "../utils/fhirAPIQuery.js";

const immunisationsRouter = express.Router();

immunisationsRouter.get("/", (req, res, next) => {
  const request = "/Immunization";
  const requestType = "GET";

  fhirAPIQuery(request, requestType, res);
});

export default immunisationsRouter;
