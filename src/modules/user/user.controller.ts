import { Request, Response } from "express"
import { prisma } from "../../lib/prisma";

const createUser = async (req: Request, res : Response) => {
    const payLoad = req.body;

    const user = await prisma.user.create({
        data : payLoad
    })

    res.status(201).json({
        message : "User has been created successfully",
        data : user
    })
} 



export const userController = {
    createUser,
}