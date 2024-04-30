import { Component } from '@angular/core';
import { Formule } from '../../model';
import { Produit, typeProduit } from '../model';
import { ProduitHttpService } from '../produit/produit-http.service';

@Component({
  selector: 'composition-menu',
  templateUrl: './composition-menu.component.html',
  styleUrl: './composition-menu.component.css'
})
export class CompositionMenuComponent {

  public produits! : Array<Produit>;
  public formule1:Formule = new Formule(1,"Formule1",25,[typeProduit.entree,typeProduit.plat,typeProduit.dessert]);

  constructor(produitSrv : ProduitHttpService){
    this.produits = produitSrv.findAll();
  }

  listeProduitsConcernes(formule:Formule){
    let entree:boolean = formule.typeProduits?.includes(typeProduit.entree);
    let plat:boolean = formule.typeProduits?.includes(typeProduit.plat);
    let dessert:boolean = formule.typeProduits?.includes(typeProduit.dessert);
    let boisson:boolean = formule.typeProduits?.includes(typeProduit.boisson);

    this.produits.filter(prod => prod.dansFormule && prod)
    //Recevoir la formule choisie
    //Afficher les bonnes catégories entre entree, plat et dessert et eligibles à la formule
    //Laisser l'utilisateur choisir seulement les produits correspondants
  }

  save(){
  //Recevoir le client
  //Recevoir la commande
  //Creer un objet detailCommande
  }
}
