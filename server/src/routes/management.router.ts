import { Router } from "express";

// Controllers imports
import {
  createBusiness,
  readBusiness,
  updateBusiness,
  deleteBusiness,
  readBusinesses,
} from "../controllers/management.controller";
import {
  createStore,
  readStore,
  updateStore,
  deleteStore,
  readStores,
} from "../controllers/management.controller";
import {
  createUser,
  readUser,
  updateUser,
  deleteUser,
  readUsers,
} from "../controllers/management.controller";

import management from "../controllers/management";

// Router initialization
const router = Router();

/* -------------------------------------------------- Business managment -------------------------------------------------- */

// Creates a business
router.post("/businesses/:id", createBusiness);

// Read a business
router.get("/businesses/:id", readBusiness);

// Update a business
router.patch("/businesses/:id", updateBusiness);

// Delete a business
router.delete("/businesses/:id", deleteBusiness);

// Read all businesses
router.get("/businesses", readBusinesses);

/* -------------------------------------------------- Store managment -------------------------------------------------- */

// Creates an store
router.post("/stores/:id", createStore);

// Read an store
router.get("/stores/:id", readStore);

// Update an store
router.patch("/stores/:id", updateStore);

// Delete an store
router.delete("/stores/:id", deleteStore);

// Read all stores
router.get("/stores", readStores);

/* -------------------------------------------------- User managment -------------------------------------------------- */

// Creates an user
router.post("/users/:id", management.createUser);

// Read an user
router.get("/users/:id", readUser);

// Update an user
router.patch("/users/:id", updateUser);

// Delete an user
router.delete("/users/:id", deleteUser);

// Read all users
router.get("/users", readUsers);

export default router;
