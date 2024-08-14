import { Component } from '@angular/core';
import {AuthService} from "../../service/auth.service";
import {ActivatedRoute, Router} from "@angular/router";
import {SessionServiceService} from "../../../shared/services/session-service.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {SingleResponse} from "../../../shared/models/api.model";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(
    private readonly authService: AuthService,
    private readonly router: Router,
    private readonly route: ActivatedRoute,
    private readonly sessionService: SessionServiceService
  ) {
  }

  loginForm: FormGroup = new FormGroup({
    email: new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl("", [Validators.required])
  })

  onSubmit(): void {
    const payload = this.loginForm.value
    this.authService.login(payload).subscribe({
      next: (response: SingleResponse<string>): void => {
        console.log('LoginComponent.onSubmit.response', response.data)
        this.sessionService.setSession("token", response.data)
        this.router.navigateByUrl("/")
      },
      error: (errorResponse: HttpErrorResponse) => {
        if(errorResponse.error.code === 500){
          alert(errorResponse.error.description)
        }
      }
    })
  }
}
