import {Component, OnInit} from '@angular/core';
import {Portofolio} from "./models/portofolio.model";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-portofolios',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './portofolios.component.html',
  styles: ``
})
export class PortofoliosComponent implements OnInit{
  portofolios!: Portofolio[]

  ngOnInit(): void {
    this.portofolios = [
      {
        id: 1,
        name: "Company Profile",
        image: 'images/companyprofile.png',
        technology: ["HTML", "Tailwind CSS"]
      },
      {
        id: 2,
        name: "Dashboard",
        image: 'images/dashboard.png',
        technology: ["HTML", "React JS"]
      },
      {
        id: 3,
        name: "LMS",
        image: 'images/lms.png',
        technology: ["HTML", "PHP"]
      },
      {
        id: 4,
        name: "Agency",
        image: 'images/agency.png',
        technology: ["HTML", "Wordpress"]
      },
      {
        id: 5,
        name: "Todos",
        image: 'images/agency.png',
        url: "/portofolio/todos",
        technology: ["HTML", "Angular"]
      }
    ]
  }


}
