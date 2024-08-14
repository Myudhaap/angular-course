import { Component } from '@angular/core';
import {ProgressBarComponent} from "../progress-bar/progress-bar.component";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: ``
})
export class HeaderComponent {
  constructor(
    private readonly route: ActivatedRoute
  ) {
    console.log(route.url.subscribe({
      next: (url) => {
        console.log(url)
      }
    }))

    console.log(route.root)
  }

  changeTheme(): void {
    const theme = localStorage.getItem("theme")

    if(!theme || theme == "light"){
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
    }else{
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light")
    }
  }
}
