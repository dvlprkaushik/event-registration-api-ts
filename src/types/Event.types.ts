import type { eventSchema } from "@/validators/event.validator.js";
import type { z } from "zod";

export type EventBody = z.infer<typeof eventSchema>;
export type Event = EventBody & { timestamp: string };

// User types
export type UserType = { role: "admin" | "user" };

// Role types
export const ROLES = ["admin", "user"] as const;
export type Role = (typeof ROLES)[number];