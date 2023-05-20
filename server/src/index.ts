import express, { NextFunction, Request, Response } from "express";
import dotenv from "dotenv";

// Error handling imports
import createHttpError, { isHttpError } from "http-errors";
import { JsonWebTokenError } from "jsonwebtoken";
import { ZodError } from "zod";

// Mongo imports
import { Error } from "mongoose";

// Router import
import router from "./routes";

// Server configuration
dotenv.config();
const app = express();
app.use(express.json());

// Server router
app.use("/api", router);

// Unkown route handler
app.use((req, res, next) => {
  next(createHttpError(404, "Endpoint not found"));
});

// Error handling
app.use((error: unknown, req: Request, res: Response, next: NextFunction) => {
  let errorMessage = "An unknown error occurred";
  let statusCode = 500;

  // HTTP errors
  if (isHttpError(error)) {
    statusCode = error.status;
    errorMessage = error.message;
  }

  // JWT errors
  if (error instanceof JsonWebTokenError) {
    if (error.message === "invalid signature") {
      statusCode = 401;
      errorMessage = "Access denied, invalid token.";
    }
  }

  // Zod errors
  if (error instanceof ZodError) {
    statusCode = 401;
    errorMessage = error.errors[0].message;
  }

  // Normal errors
  if (error instanceof Error) {
    statusCode = 401;
    errorMessage = error.message;
  }

  // Sends back the error
  res.status(statusCode).json({ error: errorMessage });
});

export default app;
