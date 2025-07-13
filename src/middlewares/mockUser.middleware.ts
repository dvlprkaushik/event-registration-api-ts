import type { RequestHandler } from "express";

export const mockUser: RequestHandler = (req, res, next) => {
    req.user = {
        role: "admin"
    };
    next();
}