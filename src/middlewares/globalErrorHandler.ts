import type { Request, Response, NextFunction } from "express";
import { config } from "../config/config.js";
import type ApiError from "../utils/ApiError.js";

export const globalErrorHandler = (
  err: ApiError,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  console.log(err);
  const error = config.NODE_ENV === "development" ? err : undefined;

  return res.status(err.statusCode).json({
    success: false,
    message: err.message,
    error,
  });
};
