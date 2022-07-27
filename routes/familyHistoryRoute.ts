import "dotenv/config";
import express from "express";
import { fhirAPIQuery } from "../utils/fhirAPIQuery";

const familyHistoryRouter = express.Router();

familyHistoryRouter.get("/", (req, res, next) => {
  const request = "/FamilyMemberHistory";
  const requestType = "GET";

  fhirAPIQuery(request, requestType, res, '');
});

familyHistoryRouter.get("/:searchID", (req, res, next) => {
  const searchID = req.params.searchID;
  const request = "/FamilyMemberHistory?patient=" + searchID;
  const requestType = "GET";

  fhirAPIQuery(request, requestType, res, '');
});

export default familyHistoryRouter;
