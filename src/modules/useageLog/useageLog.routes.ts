import { Router } from "express";
import { useageLogController } from "./useageLog.controller";
import auth from "../../middleware/auth";
import { Role } from "../../generated/prisma/enums";

const router = Router(); 

router.post('/', auth([Role.Admin]), useageLogController.createUseageLog);
router.get("/", useageLogController.getUseageLog);
router.post('/:id', auth(), useageLogController.updateUseageLog);

export const useageLogRoutes = router;