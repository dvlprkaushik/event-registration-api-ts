import { createEvent, getEvents } from "@/controllers/event.controller.js";
import { checkRole } from "@/middlewares/checkRole.middleware.js";
import { mockUser } from "@/middlewares/mockUser.middleware.js";
import { validateBody } from "@/middlewares/validate.middleware.js";
import { eventSchema } from "@/validators/event.validator.js";
import { Router } from "express";


const eventRoute = Router();

eventRoute.route("/v1/event/register").post(mockUser, checkRole("admin", "user"), validateBody(eventSchema), createEvent);

eventRoute.route("/v1/event/registrations").get(mockUser,checkRole("admin"),getEvents);

export { eventRoute };