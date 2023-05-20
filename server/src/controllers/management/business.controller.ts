import { NextFunction, Request, RequestHandler, Response } from "express";
import bcrypt from "bcrypt";

import createHttpError from "http-errors";

/* -------------------------------------------------- Business controllers -------------------------------------------------- */

/* Creates a business */
export const createBusiness: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    /* Sends back the created business */
    res.status(200).json();
  } catch (error) {
    next(error);
  }
};

/* Reads a business */
export const readBusiness: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    /* Sends back the find business */
    res.status(200).json();
  } catch (error) {
    next(error);
  }
};

/* Updates a business */
export const updateBusiness: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    /* Sends back the updated business */
    res.status(200).json();
  } catch (error) {
    next(error);
  }
};

/* Deletes a business */
export const deleteBusiness: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    /* Sends back the deleted business */
    res.status(200).json();
  } catch (error) {
    next(error);
  }
};

/* Reads all business */
export const readBusinesses: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    /* Sends back the find businesses */
    res.status(200).json();
  } catch (error) {
    next(error);
  }
};
