import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { Tasks } from "./entities/tasks.entity";

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: "mysql",
            host: "database",
            port: 3306,
            username: "todo",
            password: "123",
            database: "todo",
            entities: [Tasks],
            synchronize: false,
        }),
        TypeOrmModule.forFeature([Tasks]),
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
