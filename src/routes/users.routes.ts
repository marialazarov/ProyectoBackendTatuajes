import express from "express";
import cors from "cors";
import { UserController } from "../controllers/UserController";
import { sampleMiddleware } from "../middlewares/sampleMiddleware";
import { auth } from "../middlewares/auth";
import { isAdmin } from "../middlewares/isAdmin";

// -----------------------------------------------------------------------------

const router = express.Router();
const userController = new UserController();



router.get("/", userController.getAll); // router.get("/", auth, isAdmin, sampleMiddleware, userController.getAll);
router.get("/:id", userController.getById);
router.post("/",userController.create);
router.patch("/:id",userController.update);
router.delete("/:id", auth, isAdmin, userController.delete);

export default router;
