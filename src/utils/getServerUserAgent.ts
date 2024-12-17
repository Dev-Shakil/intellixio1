"use server";

import { headers } from "next/headers";

export async function getUserAgent() {
  const userAgent = headers().get("user-agent") || "";
  return userAgent;
}