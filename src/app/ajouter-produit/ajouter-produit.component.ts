import { Component, getNgModuleById } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { ProduitHttpService } from '../produit/produit-http.service';
import { Produit } from '../model';

@Component({
  selector: 'app-ajouter-produit',
  templateUrl: './ajouter-produit.component.html',
  styleUrl: './ajouter-produit.component.css',
})
export class AjouterProduitComponent {
  isChecked = false;
  types = [
    { id: 1, name: 'Entree' },
    { id: 2, name: 'Plat' },
    { id: 3, name: 'Dessert' },
    { id: 4, name: 'Boisson' },
  ];
  ajoutProduitForm!: FormGroup;
  libelleCtrl!: FormControl;
  prixCtrl!: FormControl;
  stockCtrl!: FormControl;
  dansFormuleCtrl!: FormControl;
  typeCtrl!: FormControl;
  allergieOeufCtrl!: FormControl;
  allergieGlutenCtrl!: FormControl;
  allergieArachideCtrl!: FormControl;
  allergieLaitCtrl!: FormControl;
  allergieSojaCtrl!: FormControl;
  hallalCtrl!: FormControl;
  veganCtrl!: FormControl;

  constructor(
    private produitHttpService: ProduitHttpService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.libelleCtrl = this.formBuilder.control('', Validators.required);
    this.prixCtrl = this.formBuilder.control('', Validators.required);
    this.stockCtrl = this.formBuilder.control('', [Validators.required]);
    this.dansFormuleCtrl = this.formBuilder.control('', [Validators.required]);
    this.typeCtrl = this.formBuilder.control('', [Validators.required]);
    this.allergieOeufCtrl = this.formBuilder.control('', [Validators.required]);
    this.allergieGlutenCtrl = this.formBuilder.control('', [
      Validators.required,
    ]);
    this.allergieArachideCtrl = this.formBuilder.control('', [
      Validators.required,
    ]);
    this.allergieLaitCtrl = this.formBuilder.control('', [Validators.required]);
    this.allergieSojaCtrl = this.formBuilder.control('', [Validators.required]);
    this.hallalCtrl = this.formBuilder.control('', [Validators.required]);
    this.veganCtrl = this.formBuilder.control('', [Validators.required]);

    this.ajoutProduitForm = this.formBuilder.group({
      libelle: this.libelleCtrl,
      prix: this.prixCtrl,
      stock: this.stockCtrl,
      dansFormule: this.dansFormuleCtrl,
      type: this.typeCtrl,
      allergieOeuf: this.allergieOeufCtrl,
      allergieGluten: this.allergieGlutenCtrl,
      allergieArachide: this.allergieArachideCtrl,
      allergieLait: this.allergieLaitCtrl,
      allergieSoja: this.allergieSojaCtrl,
      hallal: this.hallalCtrl,
      vegan: this.veganCtrl,
    });
  }

  ajoutProduit() {
    this.produitHttpService
      .inscription(this.ajoutProduitForm.value)
      .subscribe(() => this.router.navigate(['/produit', 'add']));
  }
}
