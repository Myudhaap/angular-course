import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-route-params-and-query',
  standalone: true,
  imports: [
    RouterLink,
    RouterOutlet
  ],
  templateUrl: './route-params-and-query.component.html',
  styleUrl: './route-params-and-query.component.css'
})
export class RouteParamsAndQueryComponent {

}
