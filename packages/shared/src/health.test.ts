import { describe, expect, it } from "vitest";
import { healthResponseSchema } from "./health.js";

describe("healthResponseSchema", () => {
  it("accepts a valid response", () => {
    const parsed = healthResponseSchema.safeParse({
      status: "ok",
      service: "api",
      timestamp: new Date().toISOString(),
    });
    expect(parsed.success).toBe(true);
  });

  it("rejects an unknown status", () => {
    const parsed = healthResponseSchema.safeParse({
      status: "broken",
      service: "api",
      timestamp: new Date().toISOString(),
    });
    expect(parsed.success).toBe(false);
  });
});
