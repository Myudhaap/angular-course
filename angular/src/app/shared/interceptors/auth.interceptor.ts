import { HttpInterceptorFn } from '@angular/common/http';
import {SessionServiceService} from "../services/session-service.service";
import {inject} from "@angular/core";

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const sessionService: SessionServiceService = inject(SessionServiceService)

  if(sessionService.isAuthenticated()){
    req = req.clone({
      headers: req.headers.set('Authorization', `Bearer `+ sessionService.getSession("token"))
    })

    return next(req)
  }

  return next(req);
};
