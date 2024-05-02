import { Component } from '@angular/core';
import { CommandeHttpService } from '../commande-http.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-debut-commande',
  templateUrl: './debut-commande.component.html',
  styleUrl: './debut-commande.component.css'
})
export class DebutCommandeComponent {

  constructor(private cmdService : CommandeHttpService, private router : Router){
    if(cmdService.commandeEnCours == undefined){
      cmdService.startNewCommande();
    }
  }

  versProduitIndividuel(){
    this.router.navigate(['/choixproduit'])
  }

  versCompositionMenu(){
    this.router.navigate(['/choixformule'])
  }

  versPanier(){
    this.router.navigate(['/panier'])
  }
}
