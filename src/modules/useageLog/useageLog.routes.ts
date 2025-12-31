import { Router } from "express";
import { useageLogController } from "./useageLog.controller";
import auth from "../../middleware/auth";

const router = Router(); 

router.post('/', auth(), useageLogController.createUseageLog);
router.get("/", useageLogController.getUseageLog);

export const useageLogRoutes = router;