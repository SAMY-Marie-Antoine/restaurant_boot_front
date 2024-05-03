import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Utilisateur } from '../model';
import { Router } from '@angular/router';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css',
})
export class NavBarComponent {
  constructor(private authService: AuthService, private router : Router) {}
  isLogged(): boolean {
    return this.authService.isLogged();
  }

  logout() {
    this.authService.logout();
    this.router.navigate(["/"]);
  }

  isGestionnaire() : boolean{
    return this.authService.isGestionnaire();
  }

  showUtilisateur(): string | undefined {
    let utilisateur = this.authService.getUtilisateur();
    if (utilisateur) {
      return utilisateur.username;
    }

    return '';
  }
}
