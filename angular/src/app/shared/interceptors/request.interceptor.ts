import {Injectable} from "@angular/core";
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";
import {SessionServiceService} from "../services/session-service.service";

@Injectable({
  providedIn: "root"
})

export class RequestInterceptor implements HttpInterceptor{
  constructor(
    private readonly sessionService: SessionServiceService
  ) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if(this.sessionService.isAuthenticated()){
      req.clone({
        headers: req.headers.set("Authorizaation", `Bearer ${this.sessionService.getSession("token")}`)
      })

      return next.handle(req)
    }

    return next.handle(req);
  }
}
