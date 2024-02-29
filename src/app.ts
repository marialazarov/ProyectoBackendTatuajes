import express, { Application } from "express";
import router from "./router";
import cors from "cors";

// -----------------------------------------------------------------------------

const app: Application = express();
const corsOptions = {
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
    optionsSuccessStatus: 204,
    allowedHeaders:'Origin, X-Requested-With,Content-Type,Authorization'
};
// Middlewares
app.use(express.json());
app.use(cors(corsOptions))

// Rutas
app.use(router)


export default app;
