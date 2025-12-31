import { Request, Response } from 'express';
import { prisma } from '../../lib/prisma';

const createUseageLog = async ( req: Request, res: Response ) => {
    console.log(req.user);
    try {
        const payLoad = req.body; 
        const useageLog = await prisma.usageLog.create({
            data : {...payLoad, userId : req.user?.id}
        }); 
        res.status(201).json({
            message : "Usage log created successfully",
            data : useageLog
        })
    } catch (error : any) {
        res.status(500).json({
            message : "Internal server error",
            error : error.message
        })
    }
}

const getUseageLog = async (req: Request, res: Response) => {
    try {
        const useageLog = await prisma.usageLog.findMany({ include :{user: true, equipment : true} })
        res.status(200).json({
            message : "Usage logs fetched successfully",
            data : useageLog
        })
    } catch (error : any) {
        res.status(500).json({
            message : "Internal server error",
            error : error.message
        })
    }
}

export const useageLogController = {
    createUseageLog, 
    getUseageLog,
}