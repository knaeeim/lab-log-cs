import { Router } from "express";
import { equipmentController } from "./equipment.controller";
import auth from "../../middleware/auth";

const router = Router(); 

router.post('/', auth(), equipmentController.createEquipment);

router.get('/', equipmentController.getEquipment);

export const equipmentRoutes = router;