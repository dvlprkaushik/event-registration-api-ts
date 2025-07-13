import type { Application } from "express";
import type { RequestHandler } from "express-serve-static-core";

export const healthCheck = (app: Application) => {
    const health : RequestHandler = (req ,res) => {
        res.status(200).json({
            success: true,
            status: "OK"
        });   
    }
    app.get("/", health);
}