import "dotenv/config";
import express from "express";
import fetch from "node-fetch";

const immunisationsRouter = express.Router();

immunisationsRouter.get("/", (req, res, next) => {
  const request = "/Immunization";
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

export default immunisationsRouter;
