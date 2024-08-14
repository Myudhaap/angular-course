import { Component } from '@angular/core';
import {ChildComponent} from "../child/child.component";

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [
    ChildComponent
  ],
  templateUrl: './parent.component.html',
  styles: ``
})
export class ParentComponent {
  title: string = "Parent Component"
  dataFromChild:string = ""
  counter: number = 0

  sayHello(text: string): void {
    this.dataFromChild = text
  }

  // onCounter(num: number): void{
  //   this.counter = num
  // }
}
