import { Suspense } from "react";
import { connection } from "next/server";
import { healthResponseSchema, type HealthResponse } from "@restockradar/shared";

const API_URL = process.env.API_URL ?? "http://localhost:4000";

async function getApiHealth(): Promise<HealthResponse | null> {
  try {
    const res = await fetch(`${API_URL}/health`, { cache: "no-store" });
    if (!res.ok) return null;
    return healthResponseSchema.parse(await res.json());
  } catch {
    return null;
  }
}

async function ApiStatus() {
  await connection(); // wait for a real request, so this part is never prerendered at build time
  const health = await getApiHealth();
  return <p className="mt-2">API status: {health ? `ok (${health.timestamp})` : "unreachable"}</p>;
}

export default function HomePage() {
  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold">RestockRadar</h1>
      <Suspense fallback={<p className="mt-2">Checking API…</p>}>
        <ApiStatus />
      </Suspense>
    </main>
  );
}
