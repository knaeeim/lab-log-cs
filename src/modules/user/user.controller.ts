import { Request, Response } from "express"
import { prisma } from "../../lib/prisma";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

const createUser = async (req: Request, res: Response) => {
    const payLoad = req.body;

    const hashedPassword = await bcrypt.hash(payLoad.password, 10);

    const user = await prisma.user.create({
        data: { ...payLoad, password: hashedPassword }
    })

    res.status(201).json({
        message: "User has been created successfully",
        data: user
    })
}

const login = async (req: Request, res: Response) => {
    const { email, password } = req.body;
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
        return res.status(404).json({
            message: "User Not found Brother!!!"
        })
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
        return res.status(401).json({
            message: "Invalid Password"
        })
    }

    const token = jwt.sign({ id: user.id, role: user.role }, 'very secret Key', { expiresIn: "7d" });

    res.status(200).json({
        message: "Login Successful",
        data: {
            token
        }
    })
}



export const userController = {
    createUser,
    login
}