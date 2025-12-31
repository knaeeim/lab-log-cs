import { Request, Response } from "express"
import { prisma } from "../../lib/prisma";

const createEquipment = async (req: Request, res: Response) => {
    try {
        const payLoad = req.body;
        const equipment = await prisma.equipment.create({
            data: payLoad
        })

        res.status(201).json({
            message: "Equipment created successfully",
            data: equipment
        })
    } catch (error: any) {
        res.status(500).json({
            message: "Internal server error",
            error: error.message
        })
    }
}


export const equipmentController = {
    createEquipment
}