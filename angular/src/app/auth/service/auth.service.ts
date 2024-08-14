import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {LoginDto} from "../model/auth.model";
import {Observable} from "rxjs";
import {SingleResponse} from "../../shared/models/api.model";
import {environment} from "../../../environments/environment";
import {SessionServiceService} from "../../shared/services/session-service.service";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl: string = `${environment.appBaseUrl}${environment.apiBaseUrl}/auth`

  constructor(
    private readonly http: HttpClient,
    private readonly sessionService: SessionServiceService
  ) { }

  login(payload: LoginDto): Observable<SingleResponse<string>> {
    try{
      return this.http.post<SingleResponse<string>>(` api/v1/auth/login`, payload)
    }catch(e: any){
      return e.message()
    }
  }

  logout(): void {
    this.sessionService.clearSession()
  }
}
