import { Component } from '@angular/core';
import { Formule, Produit } from '../model';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ProduitHttpService } from '../produit/produit-http.service';
import { FormuleHttpService } from '../formule-http.service';
import { Router } from '@angular/router';
import { CommandeHttpService } from '../commande-http.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
})
export class MenuComponent {
  produitsForm!: FormGroup;
  produits: Array<Produit> = new Array<Produit>();

  constructor(
    private produitSrv: ProduitHttpService,
    private formBuilder: FormBuilder
  ) {
    this.produitsForm = this.formBuilder.group({});
  }

  ngOnInit() {
    this.produitSrv.findAllObs().subscribe((resp) => {
      this.produits = resp;
    });
  }

  list() {
    return this.produits;
  }
}
