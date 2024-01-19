import express from "express";
import userRoutes from "./routes/users.routes";
import  authRoutes from "./routes/auth.routes"
import artistRoutes from "./routes/artists.routes"

// -----------------------------------------------------------------------------

const router = express.Router();

//Auth Routes;
router.use("/auth", authRoutes);
router.use("/api/users", userRoutes);;
router.use("/api/artist", artistRoutes)



export default router;
