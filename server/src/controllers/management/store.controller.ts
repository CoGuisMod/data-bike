import { NextFunction, Request, RequestHandler, Response } from "express";
import bcrypt from "bcrypt";

import createHttpError from "http-errors";

/* -------------------------------------------------- Store controllers -------------------------------------------------- */

/* Creates a store */
export const createStore: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    /* Sends back the created store */
    res.status(200).json();
  } catch (error) {
    next(error);
  }
};

/* Reads a store */
export const readStore: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    /* Sends back the find store */
    res.status(200).json();
  } catch (error) {
    next(error);
  }
};

/* Updates a store */
export const updateStore: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    /* Sends back the updated store */
    res.status(200).json();
  } catch (error) {
    next(error);
  }
};

/* Deletes a store */
export const deleteStore: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    /* Sends back the deleted store */
    res.status(200).json();
  } catch (error) {
    next(error);
  }
};

/* Reads all stores */
export const readStores: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    /* Sends back the find stores */
    res.status(200).json();
  } catch (error) {
    next(error);
  }
};
