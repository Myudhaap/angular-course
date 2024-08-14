import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Todo} from "../model/todo";
import {FaIconComponent} from "@fortawesome/angular-fontawesome";
import {TodoService} from "../services/todo.service";
import {RouterLink} from "@angular/router";
import {PagedResponse} from "../../../shared/models/api.model";

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [
    FaIconComponent,
    RouterLink
  ],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent implements OnInit{
  todos!: Todo[]
  constructor(
    private readonly todoService: TodoService
  ) {
  }

  fetchData(): void {
    this.todoService.List().subscribe({
      next: (res: PagedResponse<Todo[]>) => {
        // console.log({res})
        this.todos = res.data
      },
      error: (err) => {
        console.log(err)
      }
    })
  }

  ngOnInit(): void {
    this.fetchData()
  }

  onCheckTodo(todo: Todo): void {
    // this.toggleTodo.emit(todo)
    this.todoService.Toggle(todo).subscribe({
      next: () => {
        this.fetchData()
      },
      error: (err) => {
        console.log(err)
      }
    })
  }

  onDeleteTodo(todo: Todo): void {
    // this.deleteTodo.emit(todo)
    this.todoService.Delete(todo).subscribe({
      next: () => {
        this.fetchData()
      },
      error: (err) => {
        console.log(err)
      }
    })  }
}
