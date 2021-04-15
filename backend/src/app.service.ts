import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateTodoDTO } from "./dto/todo.create.dto";
import { Tasks } from "./entities/tasks.entity";

@Injectable()
export class AppService {
    constructor(
        @InjectRepository(Tasks)
        private tasksRepository: Repository<Tasks>,
    ) {}

    async getTasks(): Promise<Tasks[]> {
        return await this.tasksRepository.find();
    }

    async createPost(data: CreateTodoDTO): Promise<Tasks> {
        const tasks = new Tasks();

        tasks.content = data.content;
        tasks.complete = 0;

        return await this.tasksRepository.save(tasks);
    }
}
