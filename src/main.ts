import { NestFactory } from "@nestjs/core";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { AppModdule } from "./app.module";


async function start() {
    const PORT = process.env.PORT || 5000;
    const app = await NestFactory.create(AppModdule);
    app.setGlobalPrefix('api');

    const config = new DocumentBuilder()
        .setTitle('The lesson about advanced backend')
        .setDescription('Documentation for Rest API')
        .setVersion('1.0.0')
        .addTag('DmCH')
        .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('/api/docs', app, document);
    await app.listen(PORT, () => {
        console.log(`Server is listened on http://localhost:${PORT}`);
    });
}

start();