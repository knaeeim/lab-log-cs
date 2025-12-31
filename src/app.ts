import express from 'express';
import cors from 'cors';
import { userRouter } from './modules/user/user.routes';
import { equipmentRoutes } from './modules/equipment/equipment.routes';
import { useageLogRoutes } from './modules/useageLog/useageLog.routes';

const app = express();
app.use(cors({
    origin: ['http://localhost:3000'],
    credentials: true,
}))
app.use(express.json());

app.use('/users', userRouter);
app.use('/equipment', equipmentRoutes);
app.use('/usage-logs', useageLogRoutes);

export default app;