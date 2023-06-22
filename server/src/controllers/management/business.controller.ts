import { NextFunction, Request, RequestHandler, Response } from "express";

/* -------------------------------------------------- Business controllers -------------------------------------------------- */

/* Creates a business */
const createBusiness: RequestHandler = async (
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
const readBusiness: RequestHandler = async (
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
const updateBusiness: RequestHandler = async (
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
const deleteBusiness: RequestHandler = async (
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
const readBusinesses: RequestHandler = async (
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

export default {
  createBusiness,
  readBusiness,
  updateBusiness,
  deleteBusiness,
  readBusinesses,
};
