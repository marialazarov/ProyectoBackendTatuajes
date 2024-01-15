import express from "express";
import userRoutes from "./routes/users.routes";
import  authRoutes from "./routes/auth.routes"

// -----------------------------------------------------------------------------

const router = express.Router();

//Auth Routes;
router.use("/auth", authRoutes);


export default router;
