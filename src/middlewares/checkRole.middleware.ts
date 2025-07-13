import { MSG, STCODE } from "@/types/HttpUtils.types.js";
import type { RequestHandler } from "express";

export const checkRole = (requiredRole: "admin" | "user"): RequestHandler => {
    return (req, res, next) => {
        if (!req.user || req.user.role !== requiredRole) {
            return res.status(STCODE.UNAUTHORIZED).json({
                success: false,
                message: `Access denied. ${MSG.UNAUTHORIZED}`
            });
        }
        next();
    };
};