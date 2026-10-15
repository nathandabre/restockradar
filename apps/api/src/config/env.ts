import { z } from "zod";

const envSchema = z.object({
  NODE_ENV: z.enum(["development", "test", "production"]).default("development"),
  PORT: z.coerce.number().int().positive().default(4000),
});

// Fails fast at startup with a clear error if the environment is misconfigured.
export const env = envSchema.parse(process.env);
