import { Injectable } from '@angular/core';
import {jwtDecode} from "jwt-decode";

@Injectable({
  providedIn: 'root'
})
export class SessionServiceService {
  private readonly session: Storage = sessionStorage

  constructor() { }

  setSession(key: string, value: string): void {
    this.session.setItem(key, value)
  }

  getSession(key: string): string | null {
    return this.session.getItem(key)
  }

  isTokenValid(token: string | null): boolean {
    return token ? token.split(".").length == 3 : false
  }

  isAuthenticated(): boolean {
    return this.isTokenValid(this.getSession("token"))  && this.isTokenExpired(this.getSession("token"))
  }

  isTokenExpired(token: string | null): boolean {
    try{
      const {exp} = jwtDecode<any>(token || '');
      return Date.now() < exp * 1000
    }catch (e: any){
      return false
    }
  }

  clearSession(): void {
    this.session.clear()
  }
}
