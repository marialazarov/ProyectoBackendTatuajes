import express from "express";
import userRoutes from "./routes/users.routes";
import  authRoutes from "./routes/auth.routes"
import artistRoutes from "./routes/artists.routes"
import appointmentRoutes from "./routes/appointment.routes"
// -----------------------------------------------------------------------------

const router = express.Router();

//Auth Routes;
router.use("/auth", authRoutes);
router.use("/api/users", userRoutes);;
router.use("/api/artist", artistRoutes);
router.use("/api/appointments",appointmentRoutes);



export default router;
