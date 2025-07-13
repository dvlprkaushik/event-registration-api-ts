import { z } from "zod";

export const eventSchema = z.object({
  fullName: z.string().min(3, "Name should be more than 3 characters"),
  email: z.email("Invalid email address"),
  phone: z.string().length(10, "Phone number must be exactly 10 digits"),
  eventName: z.string().nonempty("Event name should not be empty"),
});
