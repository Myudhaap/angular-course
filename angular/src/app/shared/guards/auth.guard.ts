import {
  CanActivate,
  CanActivateChild,
  Router,
} from "@angular/router";
import {SessionServiceService} from "../services/session-service.service";
import {inject, Injectable} from "@angular/core";
import {ToastService} from "../services/toast.service";

@Injectable({
  providedIn: "root"
})
export class AuthGuard implements CanActivate, CanActivateChild {
  private router: Router = inject(Router)
  private sessionService: SessionServiceService = inject(SessionServiceService)
  private toastService: ToastService = inject(ToastService)

  canActivate(): boolean {
    if(!this.isAuthorize()){
      this.redirect()
      return false
    }
    return true;
  }

  canActivateChild(): boolean {
    if(!this.isAuthorize()){
      this.redirect()
      return false
    }
    return true;
  }

  private redirect(): void {
    this.router.navigate(["/auth/login"]).then()
  }

  private isAuthorize(): boolean {
    if(!this.sessionService.isAuthenticated()){
      this.toastService.show("Login first!")
      return false
    }
    return true
  }
}
