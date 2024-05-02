import { Component } from '@angular/core';
import { DetailCommande, Formule, Menu } from '../model';
import { Produit} from '../model';
import { ProduitHttpService } from '../produit/produit-http.service';
import { FormuleHttpService } from '../formule-http.service';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CommandeHttpService } from '../commande-http.service';

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

  composeMenuForm!: FormGroup;
  formuleCtrl!: FormControl;
  entreeCtrl!: FormControl;
  platCtrl!: FormControl;
  dessertCtrl! : FormControl;
  boissonCtrl!: FormControl;
  qteCtrl! : FormControl;

  constructor(private produitSrv : ProduitHttpService, 
    private formuleSrv : FormuleHttpService, 
    private router: Router,
    private formBuilder : FormBuilder,
    private cmdSrv : CommandeHttpService)
  {
    this.formuleCtrl = this.formBuilder.control("",Validators.required);
    this.entreeCtrl = this.formBuilder.control("");
    this.platCtrl = this.formBuilder.control("");
    this.dessertCtrl = this.formBuilder.control("");
    this.boissonCtrl = this.formBuilder.control("");
    this.qteCtrl = this.formBuilder.control(1,Validators.required);

    this.composeMenuForm = this.formBuilder.group({
      formule: this.formuleCtrl,
      entree: this.entreeCtrl,
      plat: this.platCtrl,
      dessert: this.dessertCtrl,
      boisson: this.boissonCtrl,
      qte : this.qteCtrl
    });

    this.formuleCtrl.valueChanges.subscribe(resp => {     this.selectFormule();});
  }

  list(){
    return this.formuleSrv.findAll();
  }

  selectFormule(){
    this.formuleChoisie = this.formuleCtrl.value;
    this.composition = true;
    this.checkProduitsConcernes();
  }

  checkProduitsConcernes(){
    if(this.formuleChoisie && this.formuleChoisie.typeProduits){
      this.entree = this.formuleChoisie.typeProduits.includes("entree");
      this.plat = this.formuleChoisie.typeProduits.includes("plat");
      this.dessert = this.formuleChoisie.typeProduits.includes("dessert");
      this.boisson = this.formuleChoisie.typeProduits.includes("boisson");
    }
  }

  listEntreeFormule(){
    return this.produitSrv.findEntrees();
  }

  listPlatFormule(){
    return this.produitSrv.findPlats();
  }

  listDessertFormule(){
    return this.produitSrv.findDesserts();
  }

  listBoissonFormule(){
    return this.produitSrv.findBoissons();
  }

  save(){
  let produitsChoisis = new Array<Produit>();
  if(this.entree){produitsChoisis.push(this.entreeCtrl.value);}
  if(this.plat){produitsChoisis.push(this.platCtrl.value);}
  if(this.dessert){produitsChoisis.push(this.dessertCtrl.value);}
  if(this.boisson){produitsChoisis.push(this.boissonCtrl.value);}
  let newMenu = new Menu(undefined,produitsChoisis,this.formuleChoisie);
  let newDetailCommande = new DetailCommande(undefined,newMenu.formule?.prix,this.qteCtrl.value,this.cmdSrv.commandeEnCours,undefined,newMenu);
  this.cmdSrv.addToCommandeEnCours(newDetailCommande);
  this.router.navigate(["/commande"]);
  }
}
