import { Component } from '@angular/core';
import { DetailCommandeService } from '../detail-commande.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DetailCommande } from '../model';
import { CommandeHttpService } from '../commande-http.service';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrl: './panier.component.css',
})
export class PanierComponent {
  detailCommande?: DetailCommande = undefined;
  ajout: boolean = false;

  constructor(private cmdService: CommandeHttpService, private router :  Router) {
   
  }

  list() {
    return this.cmdService.commandeEnCours?.detailCommandes;
  }

  edit(id?: number) {
    // this.detailCommandeHttpService.findById(id).subscribe((resp) => {
    //   this.detailCommande = resp;
    ;
  }

  add() {
    // this.ajout = true;
  }

  save() {
    this.cmdService.save();
  }

  cancel() {
   // this.detailCommande = undefined;
  }

  remove(id?: number) {
   // this.detailCommandeHttpService.delete(id);
  }
}
