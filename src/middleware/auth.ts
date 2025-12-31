import { Request, Response, NextFunction } from "express";
import { Role } from "../generated/prisma/enums";
import jwt from "jsonwebtoken";

const auth = (roles?: Role[]) => {
    return (req: Request, res: Response, next: NextFunction) => {
        const token = req.headers.authorization?.split(" ")[1];
        if (!token) {
            return res.status(401).json({
                message: "Unauthorized Access"
            })
        }

        try {
            const decoded = jwt.verify(token as string, 'very secret Key') 
            if(!decoded){
                return res.status(401).json({
                    message: "Unauthorized Access"
                })
            }
            next();
        } catch (error: any) {
            return res.status(500).json({
                message: "Error In Middleware",
                error: error.message
            })
        }
    }
}