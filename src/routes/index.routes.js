import express from 'express';
const { Router } = express;
import { index, ping } from "../controllers/index.rotes.js";

const router = Router();

router.get("/", index);

router.get("/ping", ping);

export default router;
