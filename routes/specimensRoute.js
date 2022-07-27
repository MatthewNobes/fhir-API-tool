import "dotenv/config";
import express from "express";
import { fhirAPIQuery } from "../utils/fhirAPIQuery.js";

const specimensRouter = express.Router();

specimensRouter.get("/", (req, res, next) => {
  const request = "/Specimen";
  const requestType = "GET";

  fhirAPIQuery(request, requestType, res);
});

specimensRouter.get("/:searchID", (req, res, next) => {
  const searchID = req.params.searchID;
  const request = "/Specimen?patient=" + searchID;

  const requestType = "GET";

  fhirAPIQuery(request, requestType, res);
});

export default specimensRouter;
