import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css',
})
export class NavBarComponent {
  constructor(private authService: AuthService) {}
  isLogged(): boolean {
    return this.authService.isLogged();
  }

  logout() {
    this.authService.logout();
  }

  showUtilisateur(): string | undefined {
    const utilisateur = this.authService.getUtilisateur();
    if (utilisateur) {
      return utilisateur.username;
    }

    return '';
  }
}
