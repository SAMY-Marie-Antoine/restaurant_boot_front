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
    // if (this.detailCommande) {
    //   if (this.detailCommande?.id) {
    //     this.detailCommandeHttpService.update(this.detailCommande);
    //   } else {
    //     this.detailCommandeHttpService.create(this.detailCommande);
    //   }
    //   this.detailCommande = undefined;
    // }
  }

  cancel() {
   // this.detailCommande = undefined;
  }

  remove(id?: number) {
   // this.detailCommandeHttpService.delete(id);
  }
}
