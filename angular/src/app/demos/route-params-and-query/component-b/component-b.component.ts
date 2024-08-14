import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-component-b',
  standalone: true,
  imports: [],
  templateUrl: './component-b.component.html',
  styleUrl: './component-b.component.css'
})
export class ComponentBComponent implements OnInit{
  queryParams: {[key: string]: string} = {}

  constructor(
    private readonly router: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.router.queryParams.subscribe({
      next: (params: Params) => {
        console.log({params})
        this.queryParams = params
      }
    })
  }

  getQueryParams(): string[] {
    return Object.keys(this.queryParams).map((key: string) => {
      return this.queryParams[key]
    })
  }
}
