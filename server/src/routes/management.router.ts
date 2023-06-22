import { Router } from "express";

// Controller import
import businessController from "../controllers/management/business.controller";
import storeController from "../controllers/management/store.controller";
import userController from "../controllers/management/user.controller";

// Router initialization
const router = Router();

/* -------------------------------------------------- Business managment -------------------------------------------------- */

// Creates a business
router.post("/businesses/:id", businessController.createBusiness);

// Read a business
router.get("/businesses/:id", businessController.readBusiness);

// Update a business
router.patch("/businesses/:id", businessController.updateBusiness);

// Delete a business
router.delete("/businesses/:id", businessController.deleteBusiness);

// Read all businesses
router.get("/businesses", businessController.readBusinesses);

/* -------------------------------------------------- Store managment -------------------------------------------------- */

// Creates an store
router.post("/stores/:id", storeController.createStore);

// Read an store
router.get("/stores/:id", storeController.readStore);

// Update an store
router.patch("/stores/:id", storeController.updateStore);

// Delete an store
router.delete("/stores/:id", storeController.deleteStore);

// Read all stores
router.get("/stores", storeController.readStores);

/* -------------------------------------------------- User managment -------------------------------------------------- */

// Creates an user
router.post("/users/:id", userController.createUser);

// Read an user
router.get("/users/:id", userController.readUser);

// Update an user
router.patch("/users/:id", userController.updateUser);

// Delete an user
router.delete("/users/:id", userController.deleteUser);

// Read all users
router.get("/users", userController.readUsers);

export default router;
