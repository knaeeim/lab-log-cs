import { Router } from "express";
import { equipmentController } from "./equipment.controller";

const router = Router(); 

router.post('/', equipmentController.createEquipment);

router.get('/', equipmentController.getEquipment);

export const equipmentRoutes = router;