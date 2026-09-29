"use client";

import { useEffect } from "react";
import { captureAttribution, ensureDataLayer } from "@/lib/analytics";

export function AnalyticsBootstrap() {
  useEffect(() => {
    ensureDataLayer();
    captureAttribution();
  }, []);

  return null;
}
