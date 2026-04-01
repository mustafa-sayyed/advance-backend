import express from "express";
import cors from "cors";
import { config } from "./config/config.js";

const app = express();
app.use(cors({ origin: config.CLIENT_URL, credentials: true }));
app.use(express.json());

// Routes
import userRoutes from "./routes/user.route.js";
import { globalErrorHandler } from "./middlewares/globalErrorHandler.js";

app.use("/api/users", userRoutes);


app.get("/health", (req, res) => {
  res.json({ message: "Working very fine..." });
});

app.get("/health/db", async (req, res) => {
  try {
    await checkDbConnection();
    res.json({ ok: true, message: "Database connected" });
  } catch (error) {
    res.status(500).json({
      ok: false,
      message: "Database connection failed",
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
});

// Global Error Handler
app.use(globalErrorHandler);

export default app;
