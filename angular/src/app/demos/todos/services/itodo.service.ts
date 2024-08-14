import {Todo} from "../model/todo";
import {Observable} from "rxjs";
import {PagedResponse} from "../../../shared/models/api.model";

export interface ITodoService{
  List(): Observable<PagedResponse<Todo[]>>
  Get(id: number): Observable<Todo>
  Save(todo: Todo): Observable<void>
  Delete(todo: Todo): Observable<void>
  Toggle(todo: Todo): Observable<void>
}
