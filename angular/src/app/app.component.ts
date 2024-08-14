import {Component, OnInit} from '@angular/core';
import {NgForOf} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {ParentComponent} from "./demos/sharing-data/parent/parent.component";
import {TodosComponent} from "./demos/todos/todos.component";
import {RouterOutlet} from "@angular/router";
import {HeaderComponent} from "./shared/components/header/header.component";
import {FooterComponent} from "./shared/components/footer/footer.component";
import {RouteParamsAndQueryComponent} from "./demos/route-params-and-query/route-params-and-query.component";
import {SharedModule} from "./shared/shared.module";
import {initFlowbite} from "flowbite";
import {ToastComponent} from "./shared/components/toast/toast.component";
import {AuthGuard} from "./shared/guards/auth.guard";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NgForOf,
    FormsModule,
    SharedModule,
    ParentComponent,
    TodosComponent,
    RouterOutlet,
    RouteParamsAndQueryComponent,
    ToastComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'UPSKILLING ANGULAR';

  people: string[] = ["Yudha", "Pratama"]

  getPeople(): string{
    let res: string = ""
    for(const name of this.people){
      res += name;
    }

    return res
  }

  bootcampTrainers = [
    {
      name: "Yudha",
      address: "Malang"
    },
    {
      name: "Pratama",
      address: "Surabaya"
    }
  ]

  imageSrc: {url: string, alt: string} = {
    url: "images/agency.png",
    alt: "Agency"
  }

  isCLicked: boolean = false

  onClick(): void {
    alert("Button clicked")
    this.isCLicked = !this.isCLicked
  }

  fullName: string = ""
  onChange(event: Event):void {
    const inputElement = event.target as HTMLInputElement
    const { value } = inputElement
    this.fullName = value
  }

  firstName = ""

  ngOnInit(): void {
    initFlowbite()

    const theme = localStorage.getItem("theme")
    if(theme && theme == "dark"){
      document.documentElement.classList.add("dark")
    }else{
      document.documentElement.classList.remove("dark")
    }
  }
}
