import type { Event, EventBody } from "@/types/Event.types.js";
import { MSG, STCODE } from "@/types/HttpUtils.types.js";
import type { RequestHandler } from "express";

const EVENTS: Event[] = [];
export const createEvent: RequestHandler<{}, {}, EventBody> = (req, res) => {
  try {
    const { fullName, email, phone, eventName } = req.body;
    if (EVENTS.some((e) => e.email === email)) {
      return res.status(STCODE.BAD_REQUEST).json({
        success: false,
        message: MSG.BAD_REQUEST,
      });
    }
    const newEvent: Event = {
      fullName,
      email,
      phone,
      eventName,
      timestamp: new Date().toISOString(),
    };
    EVENTS.push(newEvent);
    return res.status(STCODE.CREATED).json({
      success: true,
      message: "Registration successful",
      data: newEvent,
    });
  } catch (error) {
    return res.status(STCODE.INTERNAL_SERVER_ERROR).json({
      success: true,
      message: MSG.INTERNAL_SERVER_ERROR,
      error: error,
    });
  }
};

export const getEvents: RequestHandler = (req, res) => {
  try {
    if (EVENTS.length === 0) {
      return res.status(STCODE.NOT_FOUND).json({
        success: false,
        message: MSG.NOT_FOUND,
      });
    }
    return res.status(STCODE.CREATED).json({
      success: true,
      message: MSG.OK,
      data: EVENTS,
    });
  } catch (error) {
    return res.status(STCODE.INTERNAL_SERVER_ERROR).json({
      success: true,
      message: MSG.INTERNAL_SERVER_ERROR,
      error: error,
    });
  }
};
