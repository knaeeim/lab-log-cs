import express from 'express';
import cors from 'cors';
import { userRouter } from './modules/user/user.routes';
import { equipmentRoutes } from './modules/equipment/equipment.routes';

const app = express();
app.use(cors({
    origin: ['http://localhost:3000'],
    credentials: true,
}))
app.use(express.json());

app.use('/users', userRouter);
app.use('/equipment', equipmentRoutes);

export default app;