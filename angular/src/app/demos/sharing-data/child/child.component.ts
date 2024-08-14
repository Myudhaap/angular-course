import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
})
export class ChildComponent {
  title: string = "Child Component"

  @Input() counter: number = 0
  @Output() counterChange: EventEmitter<number> = new EventEmitter<number>()

  @Input() dataFromParent: string = ""
  @Output() sayHello: EventEmitter<string> = new EventEmitter()

  onClick(): void {
    this.sayHello.emit("Hello From Child")
    this.increment()
  }

  increment():void {
    this.counter++
    this.counterChange.emit(this.counter)
  }
}
