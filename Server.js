import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import arbitrageRoutes from "./routes/arbitrageRoutes.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api