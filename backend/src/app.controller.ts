import { Body, Controller, Get, Post } from "@nestjs/common";
import { AppService } from "./app.service";
import { CreateTodoDTO } from "./dto/todo.create.dto";
import { Tasks } from "./entities/tasks.entity";

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) {}

    @Get()
    async getTasks(): Promise<Tasks[]> {
        return await this.appService.getTasks();
    }

    @Post("/create")
    async createPost(@Body() data: CreateTodoDTO): Promise<Tasks> {
        return await this.appService.createPost(data);
    }
}
