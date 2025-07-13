import { STCODE } from "@/types/HttpUtils.types.js";
import type { RequestHandler } from "express";
import { z, type ZodType } from "zod";

export const validateBody = <ComingData>(schema: ZodType<ComingData>) => {
  const validator: RequestHandler<{}, {}, ComingData> = (req, res, next) => {
    const result = schema.safeParse(req.body);
    if (!result.success) {
      const flattened = z.flattenError(result.error);
      return res.status(STCODE.BAD_REQUEST).json({
        success: false,
        message: "Validation failed",
        errors: flattened.fieldErrors,
      });
    }
    req.body = result.data;
    next();
  };
  return validator;
};