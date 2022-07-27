import "dotenv/config";
import express from "express";
import { fhirAPIQuery } from "../utils/fhirAPIQuery.js";

const conditionsRouter = express.Router();

conditionsRouter.get("/", (req, res, next) => {
  const request = "/Condition";
  const requestType = "GET";

  fhirAPIQuery(request, requestType, res);
});

conditionsRouter.get("/:searchID", (req, res, next) => {
  const searchID = req.params.searchID;
  const request = "/Condition?patient=" + searchID;
  const requestType = "GET";

  fhirAPIQuery(request, requestType, res);
});

export default conditionsRouter;
