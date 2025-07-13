import type { Role } from "@/types/Event.types.js";
import { MSG, STCODE } from "@/types/HttpUtils.types.js";
import type { RequestHandler } from "express";

export const checkRole = (...allowedRoles : Role[]): RequestHandler => {
    return (req, res, next) => {
        const role = req.user?.role;
        if (!role || !allowedRoles.includes(role)) {
            return res.status(STCODE.UNAUTHORIZED).json({
                success: false,
                message: `Access denied. ${MSG.UNAUTHORIZED}`
            });
        }
        next();
    };
};