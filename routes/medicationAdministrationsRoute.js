import "dotenv/config";
import express from "express";
import fetch from "node-fetch";

const medicationAdministrationsRouter = express.Router();

medicationAdministrationsRouter.get("/", (req, res, next) => {
  const request = "/MedicationAdministration";
  const requestType = "GET";

  const headers = {
    "x-api-key": process.env.X_API_KEY,
    Authorization: "Bearer " + process.env.ID_TOKEN,
  };

  const requestOptions = {
    method: requestType,
    headers: headers,
    redirect: "follow",
  };

  fetch(process.env.API_URL + request, requestOptions)
    .then((response) => response.json())
    .then((data) => res.json(data));
});

medicationAdministrationsRouter.get("/:searchID", (req, res, next) => {
  const searchID = req.params.searchID;
  const request = "/MedicationAdministration?patient=" + searchID;

  const requestType = "GET";

  const headers = {
    "x-api-key": process.env.X_API_KEY,
    Authorization: "Bearer " + process.env.ID_TOKEN,
  };

  const requestOptions = {
    method: requestType,
    headers: headers,
    redirect: "follow",
  };

  fetch(process.env.API_URL + request, requestOptions)
    .then((response) => response.json())
    .then((data) => res.json(data));
});

export default medicationAdministrationsRouter;
