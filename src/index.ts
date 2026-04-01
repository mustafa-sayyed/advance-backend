import "dotenv/config";
import express from "express";
import { checkDbConnection } from "./db/index.js";
import app from "./app.js"

const PORT = process.env.PORT || 3000;

async function startServer() {
  try {
    await checkDbConnection();
    console.log("Postgres connection successful");
  } catch (error) {
    console.error("Postgres connection failed:", error);
  }

  app.listen(PORT, () => {
    console.log(`app is listening on PORT:${PORT}`);
  });
}

startServer();
