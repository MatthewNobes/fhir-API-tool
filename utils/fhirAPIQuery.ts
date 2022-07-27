import { Response } from "express-serve-static-core";
import endpoint from '../endpoints.config'
import fetch from "node-fetch";

export const fhirAPIQuery = async (
  request = "/Appointment",
  requestType = "GET",
  res: Response<any, Record<string, any>, number>,
  bodyData: string
) => {

  interface compiledHeaders {
    "x-api-key": string,
    Authorization: string
  }

  const headers: compiledHeaders = {
    "x-api-key":  endpoint.XAPIKey,
    Authorization: "Bearer " + endpoint.IDToken,
  };

  interface compiledOptions {
    method: string,
    headers: any ,
    body?: string
    redirect: string,
  }

  const requestOptions: compiledOptions = {
    method: requestType,
    headers: headers,
    redirect: "follow",
  };

  if (requestType === "POST") {
    requestOptions.body = bodyData;
  }

  // @ts-ignore
  fetch(endpoint.APIURL + request, requestOptions)
    .then((response) => response.json())
    .then((data) => res.json(data));
};
