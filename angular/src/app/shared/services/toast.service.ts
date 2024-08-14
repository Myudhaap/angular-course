import { Injectable } from '@angular/core';
import {Observable, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  private readonly toastSubject: Subject<{message: string}> = new Subject<{message: string}>()
  toastState$: Observable<{message: string}> = this.toastSubject.asObservable()

  constructor() { }

  show(message: string): void {
    this.toastSubject.next({message})
  }
}
