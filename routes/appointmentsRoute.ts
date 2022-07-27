import "dotenv/config";
import express from "express";
import { fhirAPIQuery } from "../utils/fhirAPIQuery";

const appointmentsRouter = express.Router();

appointmentsRouter.get("/", (req, res, next) => {
  const request = "/Appointment";
  const requestType = "GET";
  fhirAPIQuery(request, requestType, res, '');
});

export default appointmentsRouter;
