import { Router } from "express";
import { useageLogController } from "./useageLog.controller";

const router = Router(); 

router.post('/', useageLogController.createUseageLog);
router.get("/", useageLogController.getUseageLog);

export const useageLogRoutes = router;