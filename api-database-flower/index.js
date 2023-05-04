require("dotenv").config();
//require("./database/firebase/index.js");

const { checkConnection, syncModels } = require("./database/index.js");

const addRelations = require("./database/relations.js");

const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

async function checkAndSyncPostgreSQL() {
  addRelations();
  await checkConnection();
  await syncModels();
}

function inicialieAndListenWithExpress() {
  const app = express()
    .use(cors())
    .use(express.json())
    .use(morgan("dev"))
    .use("/api", require("./api/routes"))

    .listen(process.env.PORT, () => {
      console.log(`> Listening on port: ${process.env.PORT}`);
    });
}

async function startAPI() {
  await checkAndSyncPostgreSQL();
  inicialieAndListenWithExpress();
}

startAPI();
