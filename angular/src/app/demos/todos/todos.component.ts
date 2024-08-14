import {Component, OnInit} from '@angular/core';
import {Todo} from "./model/todo";
import {TodoListComponent} from "./todo-list/todo-list.component";
import {TodoFormComponent} from "./todo-form/todo-form.component";
import {DateCustomPipe} from "../../shared/pipe/date-custom.pipe";
import {Locale} from "date-fns";
import {th} from "date-fns/locale";
import {SessionServiceService} from "../../shared/services/session-service.service";
import {TodoService} from "./services/todo.service";

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [
    TodoListComponent,
    TodoFormComponent,
    DateCustomPipe
  ],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})
export class TodosComponent{
  todos!: Todo[]

  currDate: Date = new Date();
  locale: Locale = th;

  constructor(
    private readonly todoService: TodoService
  ) {
  }

  onSaveTodo(todo: Todo): void {

  }
}
