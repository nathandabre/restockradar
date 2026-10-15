import type { Request, Response } from "express";
import type { HealthResponse } from "@restockradar/shared";
import { healthService } from "../services/health.service.js";

export function getHealth(_req: Request, res: Response<HealthResponse>): void {
  res.json(healthService.check());
}
