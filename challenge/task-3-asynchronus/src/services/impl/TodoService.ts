import {ITodoService} from "../ITodoService";
import {Todo} from "../../models/todo";
export class TodoService implements ITodoService {
    private readonly todos: Todo[] = []

    Create(todo: Todo): Promise<Todo> {
        return new Promise<Todo>((resolve, reject): void => {
            setTimeout(() => {
                try{
                    const existTodo: Todo | undefined = this.todos.find((x: Todo) => x.id == todo?.id)
                    if(existTodo) return reject("Created failed")

                    todo.id = this.todos.length > 0 ? this.todos.length + 1 : 1
                    this.todos.push(todo)
                    return resolve(todo)
                }catch (err){
                    throw err
                }
            }, 2000)
        })
    }

    Get(id: number): Promise<Todo> {
        return new Promise<Todo>((resolve, reject): void => {
            setTimeout(() => {
                try{
                    const existTodo: Todo | undefined = this.todos.find((todo: Todo) => todo.id == id)
                    if(!existTodo) return reject("Todo not found")

                    return resolve(existTodo)
                }catch (err){
                    throw err
                }
            }, 2000)
        })
    }

    List(): Promise<Todo[]> {
        return new Promise<Todo[]>((resolve, reject): void => {
            setTimeout(() => {
                try{
                    return resolve(this.todos)
                }catch (err){
                    throw err
                }
            }, 3000)
        })
    }
}