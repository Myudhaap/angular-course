import {Todo} from "../models/todo";

export interface ITodoService {
    Create(todo: Todo): Promise<Todo>
    List(): Promise<Todo[]>
    Get(id: number): Promise<Todo>
}