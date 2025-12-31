import { Router } from "express";
import { equipmentController } from "./equipment.controller";

const router = Router(); 

router.post('/', equipmentController.createEquipment)

export const equipmentRoutes = router;