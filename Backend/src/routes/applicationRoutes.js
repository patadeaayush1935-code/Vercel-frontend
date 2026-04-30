import express from "express";
import { applyToJob, getApplications } from "../controllers/applicationController.js";

const router = express.Router();

router.post("/apply", applyToJob);
router.get("/", getApplications);

export default router;