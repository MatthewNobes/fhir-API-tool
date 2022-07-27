import "dotenv/config";
import express from "express";
import fetch from "node-fetch";
import addPatient from "../library/addPatient.json";

const patientsRouter = express.Router();

patientsRouter.get("/allPatients", (req, res, next) => {
  const request = "/Patient";
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

patientsRouter.get("/paitent/:searchName", (req, res, next) => {
  const searchName = req.params.searchName;
  const request = "/Patient?name=" + searchName;

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

patientsRouter.get("/all_data/:searchID", (req, res, next) => {
  const searchID = req.params.searchID;
  const request = "/Patient/" + searchID;

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

patientsRouter.get("/add-patient", (req, res) => {
  //Not working
  const request = "/Patient";
  const requestType = "POST";

  const headers = {
    "x-api-key": process.env.X_API_KEY,
    Authorization: "Bearer " + process.env.ID_TOKEN,
  };

  let data = JSON.stringify(addPatient);

  const requestOptions = {
    method: requestType,
    headers: headers,
    body: data,
    redirect: "follow",
  };

  console.log(requestOptions);

  fetch(process.env.API_URL + request, requestOptions)
    .then((response) => response.json())
    .then((data) => res.json(data));
});

export default patientsRouter;
