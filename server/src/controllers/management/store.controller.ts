import { NextFunction, Request, RequestHandler, Response } from "express";

/* -------------------------------------------------- Store controllers -------------------------------------------------- */

/* Creates a store */
const createStore: RequestHandler = async (
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
const readStore: RequestHandler = async (
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
const updateStore: RequestHandler = async (
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
const deleteStore: RequestHandler = async (
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
const readStores: RequestHandler = async (
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

export default { createStore, readStore, updateStore, deleteStore, readStores };
