import app from "./app";
import { prisma } from "./lib/prisma";

const PORT = process.env.PORT || 3000;

async function run() {
    try {
        await prisma.$connect();
        console.log("Database Connected Successfully!");

        app.listen(PORT, () => {
            console.log(`Server is running on http://localhost:${PORT}`);
        })
    } catch (error: any) {
        console.log(error.message);
        await prisma.$disconnect();
        process.exit(1);
    }
}

run();