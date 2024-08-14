import { Component } from '@angular/core';
import {ContactComponent} from "../contact/contact.component";
import {ExperiencesComponent} from "../experiences/experiences.component";
import {HeroComponent} from "../hero/hero.component";
import {PortofoliosComponent} from "../portofolios/portofolios.component";
import {ServicesComponent} from "../services/services.component";
import {ProgressBarComponent} from "../../shared/components/progress-bar/progress-bar.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    ContactComponent,
    ExperiencesComponent,
    HeroComponent,
    PortofoliosComponent,
    ServicesComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
