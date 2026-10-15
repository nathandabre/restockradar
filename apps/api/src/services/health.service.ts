import type { HealthResponse } from "@restockradar/shared";

export const healthService = {
  check(): HealthResponse {
    return { status: "ok", service: "api", timestamp: new Date().toISOString() };
  },
};
