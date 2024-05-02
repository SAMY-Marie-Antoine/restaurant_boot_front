import { Component } from '@angular/core';
import { ProduitHttpService } from '../produit/produit-http.service';
import { CommandeHttpService } from '../commande-http.service';
import { DetailCommande, Produit } from '../model';
import { Router } from '@angular/router';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'commande-produit',
  templateUrl: './commande-produit.component.html',
  styleUrl: './commande-produit.component.css'
})
export class CommandeProduitComponent {

  produitsForm!: FormGroup;
  produits : Array<Produit> = new Array<Produit>;

  constructor(private produitSrv : ProduitHttpService,
     private commandeSrv : CommandeHttpService,
      private router : Router,
    private formBuilder : FormBuilder){
      this.produitsForm = this.formBuilder.group({});
  }

  ngOnInit(){
    this.produitSrv.findAllObs().subscribe(resp => {
      this.produits = resp;
      this.produits.forEach(
        x => {
          if(x.id){
            this.produitsForm.addControl("a"+x.id,this.formBuilder.control(0));
          }
        });
    });
  }

  list() {
    return this.produits;
  }

  save(){
    let i : number = 0;
    for(let control in this.produitsForm.controls){
      if(this.produitsForm.controls[control].value>0){
      this.ajoutProduitDansCommande(this.produits[i],this.produitsForm.controls[control].value);
    }
      i++;
    }
    this.router.navigate(["/panier"]);
  }

  ajoutProduitDansCommande(produit : Produit, qte : number){
    if(this.commandeSrv.commandeEnCours){
    this.commandeSrv.addToCommandeEnCours(new DetailCommande(undefined, produit.prix,qte,this.commandeSrv.commandeEnCours,produit))
    }
  }
}
