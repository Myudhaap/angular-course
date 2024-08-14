import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderComponent} from "./components/header/header.component";
import {FooterComponent} from "./components/footer/footer.component";
import {NotFoundComponent} from "./components/not-found/not-found.component";
import {ProgressBarComponent} from "./components/progress-bar/progress-bar.component";
import {
  ValidationMessageComponentComponent
} from "./components/validation-message-component/validation-message-component.component";

const component = [
  HeaderComponent,
  FooterComponent,
  NotFoundComponent,
  ProgressBarComponent,
  ValidationMessageComponentComponent
]


@NgModule({
  // Tempat terdaftar sebuah component yang ada di dalam module
  declarations: [
    ...component
  ],
  // Kebutuhan yang diperlukan module
  imports: [
    CommonModule
  ],
  // Untuk memberikan level public ke component
  exports: [
    ...component
  ],
  // Untuk mengimport sebuah service Dependency Injection
  providers: []
})
export class SharedModule { }
