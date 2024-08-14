import {Injectable} from '@angular/core';
import {ITodoService} from "./itodo.service";
import {Todo} from "../model/todo";
import {SessionServiceService} from "../../../shared/services/session-service.service";
import {Observable, Subscriber} from "rxjs";
import {environment} from "../../../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {PagedResponse} from "../../../shared/models/api.model";

@Injectable({
  providedIn: 'root'
})
export class TodoService implements ITodoService{
  private todos: Todo[] = []
  private readonly apiBaseUrl: string = `${environment.apiBaseUrl}/todos`
  private readonly token!: string;

  constructor(
    private readonly sessionService: SessionServiceService,
    private readonly http: HttpClient
  ) {
    this.token = this.sessionService.getSession("token") as string
  }


  // private saveData(): void {
  //   this.sessionService.setSession("todos", JSON.stringify(this.todos))
  // }

  List(): Observable<PagedResponse<Todo[]>> {
    // return new Observable<Todo[]>((observer: Subscriber<Todo[]>) => {
    //   try{
    //     this.todos = JSON.parse(this.sessionService.getSession("todos") ?? "[]");
    //     observer.next(this.todos)
    //   }catch (err: any){
    //     observer.error(err.message)
    //   }
    // })
    return this.http.get<PagedResponse<Todo[]>>(this.apiBaseUrl
      // {
      //   headers: new HttpHeaders({
      //     Authorization: `Bearer ${this.token}`
      //   })
      // }
    )
  }

  Delete(todo: Todo): Observable<void> {
    // return new Observable<void>((observer: Subscriber<void>) => {
    //   try{
    //     const id = this.todos.findIndex((val: Todo) => val.id == todo.id)
    //
    //     if(id != -1){
    //       this.todos.splice(id, 1)
    //     }
    //
    //     this.saveData()
    //   }catch(e: any){
    //     observer.error(e.message())
    //   }
    // })
    return new Observable<void>()
  }

  Get(id: number): Observable<Todo> {
    // return new Observable<Todo>((observer: Subscriber<Todo>) => {
    //   try{
    //     const todo: Todo | undefined = this.todos.find((t: Todo) => t.id == id)
    //     if(!todo) throw new Error("Todo not found")
    //
    //     observer.next(todo)
    //   }catch (e: any){
    //     observer.error(e.message)
    //   }
    // })

    return new Observable<Todo>()
  }

  Save(todo: Todo): Observable<void> {
    // return new Observable<void>((observer: Subscriber<void>) => {
    //   try{
    //     if(!todo.id){
    //       let maxId: number = 0;
    //       if(this.todos){
    //         maxId = Math.max(...this.todos.map(val => val.id!))
    //       }
    //
    //       todo.id = this.todos.length == 0 ? 1 : maxId + 1
    //       this.todos.push(todo)
    //     }else{
    //       this.todos.forEach((val: Todo) => {
    //         if(val.id == todo.id){
    //           val.name = todo.name
    //           val.isDone = todo.isDone
    //         }
    //       })
    //     }
    //
    //     this.saveData()
    //   }catch (e: any){
    //     observer.error(e.message)
    //   }
    // })

    return new Observable()
  }

  Toggle(todo: Todo): Observable<void> {
    // return new Observable((observer: Subscriber<void>) => {
    //   try{
    //     this.todos.forEach((val: Todo) => {
    //       if(todo.id == val.id){
    //         val.isDone = !val.isDone
    //       }
    //     })
    //
    //     this.saveData()
    //   }catch (e: any){
    //     observer.error(e.message())
    //   }
    // })

    return new Observable()
  }
}
