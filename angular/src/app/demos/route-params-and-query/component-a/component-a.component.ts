import {Component, inject, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-component-a',
  standalone: true,
  imports: [],
  templateUrl: './component-a.component.html',
  styleUrl: './component-a.component.css'
})
export class ComponentAComponent implements OnInit{

  paramId!: string

  // nanti di inject #1
  // private readonly route: ActivatedRoute = inject(ActivatedRoute)

  // #2
  constructor(
    private readonly route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.route.params.subscribe({
      next: (params: Params): void => {
        console.log({params})
        // console.log("params [name]", params['name'])
        this.paramId = params['id']
      },
    })
  }


}

