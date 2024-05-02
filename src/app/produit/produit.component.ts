import { Component, Input } from '@angular/core';
import { Produit } from '../model';
import { ProduitHttpService } from '../produit/produit-http.service';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrl: './produit.component.css',
})
export class ProduitComponent {
  /*types = [
    { id: 1, name: 'entree' },
    { id: 2, name: 'plat' },
    { id: 3, name: 'dessert' },
    { id: 4, name: 'boisson' },
  ];*/

  public types: Array<any> = [
    { id: [0], name: 'entree' },
    { id: [1], name: 'plat' },
    { id: [2], name: 'dessert' },
    { id: [3], name: 'boisson' },
  ];
  /*types = ['entree', 'plat', 'dessert', 'boisson'];*/
  ajoutProduitForm?: Produit = undefined;
  //ajout: boolean = false;

  constructor(
    private produitHttpService: ProduitHttpService,
    private route: ActivatedRoute
  ) {
    /*this.route.params.subscribe((params) => {
      if (params['mode'] == 'add') {
        this.ajoutProduitForm = new Produit();
      }
    });*/
  }

  list() {
    return this.produitHttpService.findAll();
  }

  edit(id?: number) {
    this.produitHttpService.findById(id).subscribe((resp) => {
      this.ajoutProduitForm = resp;
    });
  }

  add() {
    //this.ajout = true;
    this.ajoutProduitForm = new Produit();
  }

  save() {
    if (this.ajoutProduitForm) {
      if (this.ajoutProduitForm?.id) {
        this.produitHttpService.update(this.ajoutProduitForm);
      } else {
        this.produitHttpService.create(this.ajoutProduitForm);
      }
      this.ajoutProduitForm = undefined;
    }
  }

  cancel() {
    this.ajoutProduitForm = undefined;
  }

  remove(id?: number) {
    this.produitHttpService.delete(id);
  }
}
