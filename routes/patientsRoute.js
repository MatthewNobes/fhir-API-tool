import "dotenv/config";
import express from "express";
import fetch from "node-fetch";

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
  const request = "/Patient";
  const requestType = "POST";

  const headers = {
    "x-api-key": process.env.X_API_KEY,
    Authorization: "Bearer " + process.env.ID_TOKEN,
  };

  // prettier-ignore
  const data = JSON.stringify({
    resourceType: "Patient",
    text: {
      status: "generated",
      div: "<div xmlns=\'http://www.w3.org/1999/xhtml\'><p></p></div>",
    },
    active: true,
    name: [
      {
        family: "Person",
        given: ["Test"],
      },
    ],
    gender: "male",
    birthDate: "1950-02-20",
    managingOrganization: {
      reference: "Organization/2.16.840.1.113883.19.5",
      display: "Good Health Clinic",
    },
  });

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
