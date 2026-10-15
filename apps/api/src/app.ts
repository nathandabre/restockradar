import express from "express";
import { healthRouter } from "./routes/health.routes.js";

export function createApp(): express.Express {
  const app = express();
  app.disable("x-powered-by");
  app.use(express.json());
  app.use("/health", healthRouter);
  return app;
}
