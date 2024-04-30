import { Injectable } from '@angular/core';
import { Utilisateur } from '../model';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private utilisateur?: Utilisateur = undefined;
  
  constructor(private http: HttpClient, private router: Router) { }

  login(username:string, password:string){
    //this.http.
    //.subscribe(resp => {this.utilisateur = resp; this.router.navigate([?"])})
  }

  logout(){
    this.utilisateur = undefined;
  }

  isLogged(): boolean {
    return this.utilisateur != undefined;
  }

  isGestionnaire(): boolean {
    if(this.utilisateur && this.utilisateur.gestionnaire){
      return true;
    }
    return false;
  }

  getUtilisateur() : Utilisateur | undefined{
    if(this.utilisateur) {
      return this.utilisateur;
    }

    return undefined;
  }
}