import { NestFactory } from "@nestjs/core";
import { AppModdule } from "./app.module";


async function start() {
    const PORT = process.env.PORT || 5000;
    const app = await NestFactory.create(AppModdule);
    app.setGlobalPrefix('api')
    await app.listen(PORT, () => {
        console.log(`Server is listened on http://localhost:${PORT}`);
    });
}

start();