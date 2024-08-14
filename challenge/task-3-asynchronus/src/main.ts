import {Todo} from "./models/todo";
import {TodoService} from "./services/impl/TodoService";
import {ITodoService} from "./services/ITodoService";


async function main(): Promise<void>{
    const todoService: ITodoService = new TodoService()

    let todo: Todo = {
        task: "Create Todo",
        isCompleted: false
    }
    console.log("Todo:", {todo})

    todo = await todoService.Create(todo)
    console.log(`Create:`, {todo})

    todo = await todoService.Get(1)
    console.log(`Get:`, {todo})

    const todos: Todo[] = await todoService.List()
    console.log(`List:`,{todos})
}

main().catch((err) => console.log(err))