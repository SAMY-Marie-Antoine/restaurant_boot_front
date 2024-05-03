import { Injectable } from '@angular/core';
import { Utilisateur } from '../model';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from './environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private utilisateur?: Utilisateur = undefined;
  
  constructor(private http: HttpClient, private router: Router) { }

  login(username:string, password:string){
    this.http.post<Utilisateur>(environment.apiUrl+"/clients/login",{"username" : username, "password" : password}).subscribe(
        resp => {this.utilisateur = resp; this.router.navigate(["/"]);}
        );
  }

  logout(){
    this.utilisateur = undefined;
    this.router.navigate(["/"]);
  }

  isLogged(): boolean {
    return this.utilisateur != undefined;
  }

  isGestionnaire(): boolean {
    if(this.utilisateur?.gestionnaire){
      return this.utilisateur.gestionnaire;
    }
    return false;
  }

  getUtilisateur(){
    if(this.utilisateur) {
      return this.utilisateur;
    }
    return undefined;
  }
}
