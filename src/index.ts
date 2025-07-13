import express from "express";
import dotenv from "dotenv";
import { healthCheck } from "./config/HealthCheck.js";
import { listener } from "./config/listener.js";
import { eventRoute } from "./routes/event.routes.js";


dotenv.config({ quiet: true });

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

healthCheck(app);

app.use("/api", eventRoute);

listener(app);