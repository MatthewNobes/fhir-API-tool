import fetch from "node-fetch";

export const fhirAPIQuery = async (
  request = "/Appointment",
  requestType = "GET",
  res,
  bodyData
) => {
  const headers = {
    "x-api-key": process.env.X_API_KEY,
    Authorization: "Bearer " + process.env.ID_TOKEN,
  };

  const requestOptions = {
    method: requestType,
    headers: headers,
    redirect: "follow",
  };

  if (requestType === "POST") {
    requestOptions.object = bodyData;
  }

  fetch(process.env.API_URL + request, requestOptions)
    .then((response) => response.json())
    .then((data) => res.json(data));
};
