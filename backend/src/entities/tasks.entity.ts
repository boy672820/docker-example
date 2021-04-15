import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Tasks {
    @PrimaryGeneratedColumn()
    ID: number;

    @Column()
    content: string;

    @Column()
    complete: number;
}
