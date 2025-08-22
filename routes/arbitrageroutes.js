import express from "express";
import { getArbitrages } from "../controllers/arbitrageController.js";

const router = express.Router();

router.get("/arbitrages", getArbitrages);

export default router;