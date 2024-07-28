import { Router } from "express";
import getMain from "../controllers/controller";

const router = Router()

router.get('/', getMain)

export default router