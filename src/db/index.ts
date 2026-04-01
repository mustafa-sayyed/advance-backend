import { Pool } from "pg";
import { config } from "../config/config.js";

console.log(config);

export const pool = new Pool({
  host: config.DB_HOST,
  port: Number(config.DB_PORT),
  user: config.DB_USER,
  password: config.DB_PASSWORD,
  database: config.DB_NAME,
});

pool.on("connect", () => {
  console.log("Connection Pool Established to PostgreSQL");
});

pool.on("error", (err) => {
  console.error("Database error:", err);
});

export async function checkDbConnection() {
  const client = await pool.connect();
  try {
    await client.query("SELECT 1");
  } finally {
    client.release();
  }
}
