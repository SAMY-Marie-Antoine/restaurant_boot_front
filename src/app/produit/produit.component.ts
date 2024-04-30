import { Component } from '@angular/core';
import { Produit } from '../model';
import { ProduitHttpService } from '../produit/produit-http.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrl: './produit.component.css',
})
export class ProduitComponent {
  ajoutProduitForm?: Produit = undefined;
  ajout: boolean = false;

  constructor(
    private produitHttpService: ProduitHttpService,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe((params) => {
      if (params['mode'] == 'add') {
        this.ajoutProduitForm = new Produit();
      }
    });
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
    this.ajout = true;
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
