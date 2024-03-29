import { TaskStatus } from "./task-enum";

export class Task {
    id: number;
    title: string;
    completed: any;
    constructor(title: string, prevId: number) {
        this.id = prevId + 1;
        this.title = title
        this.completed = TaskStatus.Wait;
    }
}