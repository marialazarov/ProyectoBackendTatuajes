import express from "express";
import cors from "cors";
import { AppointmentController } from "../controllers/AppointmentController";
import { auth } from "../middlewares/auth";
import { isAdmin } from "../middlewares/isAdmin";

// -----------------------------------------------------------------------------

const router = express.Router();
const appointmentController= new AppointmentController();

router.get("/", appointmentController.getAll);
router.get("/:id", appointmentController.getById);
router.post("/",  appointmentController.create);
router.patch("/:id", appointmentController.update);
router.delete("/:id", appointmentController.delete);
router.get("/miscitas/:id", auth, appointmentController.getByArtistId);
export default router;