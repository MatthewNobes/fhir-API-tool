import "dotenv/config";
import express from "express";
import addPatient from "../library/addPatient.json";
import { fhirAPIQuery } from "../utils/fhirAPIQuery.js";

const patientsRouter = express.Router();

patientsRouter.get("/allPatients", (req, res, next) => {
  const request = "/Patient";
  const requestType = "GET";

  fhirAPIQuery(request, requestType, res);
});

patientsRouter.get("/paitent/:searchName", (req, res, next) => {
  const searchName = req.params.searchName;
  const request = "/Patient?name=" + searchName;

  const requestType = "GET";

  fhirAPIQuery(request, requestType, res);
});

patientsRouter.get("/all_data/:searchID", (req, res, next) => {
  const searchID = req.params.searchID;
  const request = "/Patient/" + searchID;

  const requestType = "GET";

  fhirAPIQuery(request, requestType, res);
});

patientsRouter.get("/add-patient", (req, res) => {
  //Not working
  const request = "/Patient";
  const requestType = "POST";

  let data = JSON.stringify(addPatient);

  fhirAPIQuery(request, requestType, res, data);
});

export default patientsRouter;
