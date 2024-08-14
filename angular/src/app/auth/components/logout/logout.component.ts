import { Component } from '@angular/core';
import {AuthService} from "../../service/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.css'
})
export class LogoutComponent {
  constructor(
    private readonly authService: AuthService,
    private readonly router: Router
  ) {
    this.authService.logout()
    this.router.navigate(["/auth/login"]).then()
  }

}
