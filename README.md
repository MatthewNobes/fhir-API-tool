# FHIR API Tool

This tool acts as a middle-man for FHIR server queries, it adds the CORS headers to each request, allowing the data to be displayed in front-end web applications.

This was created as part of the FHIR-CQL project, for more details: coming soon!

## Setup

To set this file up, you need to create a .env file with the following parameters:

- ID_TOKEN
- API_URL
- X_API_KEY

Once created, you need to install the necessary NPM packages using either of the following commands:

```bash
npm i

npm install
```

When these packages have been installed, you can start the application using this command:

```bash
npm start
```
