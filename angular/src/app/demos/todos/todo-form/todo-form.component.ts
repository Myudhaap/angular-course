import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {Todo} from "../model/todo";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {CommonModule, NgIf} from "@angular/common";
import {
  ValidationMessageComponentComponent
} from "../../../shared/components/validation-message-component/validation-message-component.component";
import {TodoService} from "../services/todo.service";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {SharedModule} from "../../../shared/shared.module";

@Component({
  selector: 'app-todo-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule,
    SharedModule
  ],
  templateUrl: './todo-form.component.html',
  styleUrl: './todo-form.component.css'
})
export class TodoFormComponent implements OnChanges, OnInit{
  // todo: Todo = {
  //   name: "",
  //   isComplete: false
  // }
  //
  // id!: number | null
  //
  // todoForm: FormGroup = new FormGroup({
  //   "id": new FormControl(""),
  //   "name": new FormControl("", [Validators.required, Validators.minLength(3)]),
  //   "isDone": new FormControl(false)
  // })
  //
  // constructor(
  //   private readonly todoService: TodoService,
  //   private readonly router: ActivatedRoute,
  //   private readonly route: Router
  // ) {
  // }
  //
  // get name() {
  //   return this.todoForm.controls["name"];
  // }
  //
  // isFormValid(name: string): boolean {
  //   const control = this.todoForm.controls[name];
  //   return (control.touched || control.dirty) && !control.valid;
  // }
  //
  ngOnChanges() {
    // if(!this.todo.id) return
    //
    // this.todoForm.setValue(this.todo)
  }

  ngOnInit(): void {
    // this.router.params.subscribe({
    //   next: (params: Params) => {
    //     this.id = parseInt(params['id'])
    //     if(this.id){
    //       this.onEditTodo(this.id)
    //       console.log(this.todo)
    //     }
    //   }
    // })
  }

  // onEditTodo(id: number): void {
  //   this.todoService.Get(id).subscribe({
  //     next: (data: Todo) => {
  //       this.todo = data
  //       this.todoForm.setValue(this.todo)
  //     },
  //     error: (err) => {
  //       console.log(err)
  //     }
  //   })
  // }
  //
  // onSubmitTodo(): void {
  //   const todo = this.todoForm.value
  //
  //   this.todoService.Save(todo).subscribe({
  //     next: () => {
  //       this.todo = {
  //         name: "",
  //         isComplete: false
  //       }
  //     },
  //     error: (err) => {
  //       console.log(err)
  //     }
  //   })
  //
  //   this.todoForm.reset()
  //   this.route.navigateByUrl("/portofolio/todos")
  // }
}
