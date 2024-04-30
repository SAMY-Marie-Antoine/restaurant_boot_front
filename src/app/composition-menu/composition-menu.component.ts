import { Component } from '@angular/core';
import { Formule } from '../model';
import { Produit} from '../model';
import { ProduitHttpService } from '../produit/produit-http.service';
import { FormuleHttpService } from '../formule-http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'composition-menu',
  templateUrl: './composition-menu.component.html',
  styleUrl: './composition-menu.component.css'
})
export class CompositionMenuComponent {

  public formuleChoisie? : Formule;
  public composition : boolean = false;
  public entree:boolean = false;
  public plat:boolean = false;
  public dessert:boolean = false;
  public boisson:boolean = false;

  constructor(private produitSrv : ProduitHttpService, private formuleSrv : FormuleHttpService, private router: Router){
  }

  list(){
    return this.formuleSrv.findAll();
  }

  selectFormule(formule : Formule){
    this.formuleChoisie = formule;
    this.composition = true;
  }
  checkProduitsConcernes(){
    if(this.formuleChoisie && this.formuleChoisie.typeProduits){
      this.entree = this.formuleChoisie.typeProduits.includes("entree");
      this.plat = this.formuleChoisie.typeProduits.includes("plat");
      this.dessert = this.formuleChoisie.typeProduits.includes("dessert");
      this.boisson = this.formuleChoisie.typeProduits.includes("boisson");
    }
   
    //this.produits.filter(prod => prod.dansFormule && prod)
  }

  save(){
  //Creer un objet detailCommande
  //L'ajouter avec CommandeSrv
  }
}
