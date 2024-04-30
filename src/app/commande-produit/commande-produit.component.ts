import { Component } from '@angular/core';
import { ProduitHttpService } from '../produit/produit-http.service';
import { CommandeHttpService } from '../commande-http.service';
import { DetailCommande, Produit } from '../model';
import { Router } from '@angular/router';

@Component({
  selector: 'commande-produit',
  templateUrl: './commande-produit.component.html',
  styleUrl: './commande-produit.component.css'
})
export class CommandeProduitComponent {

  constructor(private produitSrv : ProduitHttpService, private commandeSrv : CommandeHttpService, private router : Router){
  }

  list() : Array<Produit>{
    return this.produitSrv.findAll();
  }
  ajoutProduitDansCommande(produit : Produit){
    if(this.commandeSrv.commandeEnCours){
    this.commandeSrv.addToCommandeEnCours(new DetailCommande(undefined, produit.prix,1,this.commandeSrv.commandeEnCours,produit))
    }
    this.router.navigate(["/commande"])
  }
}
