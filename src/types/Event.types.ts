import type { eventSchema } from "@/validators/event.validator.js";
import type { z } from "zod";

export type EventBody = z.infer<typeof eventSchema>;
export type Event = EventBody & { timestamp: Date };