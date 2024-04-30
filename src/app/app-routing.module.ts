import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjouterProduitComponent } from './ajouter-produit/ajouter-produit.component';
import { ProduitComponent } from './produit/produit.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { DetailCommande } from './model';
import { DebutCommandeComponent } from './debut-commande/debut-commande.component';
import { CommandeProduitComponent } from './commande-produit/commande-produit.component';
import { CompositionMenuComponent } from './composition-menu/composition-menu.component';
import { PanierComponent } from './panier/panier.component';

const routes: Routes = [
  { path: 'ajouterProduit', component: AjouterProduitComponent },
  { path: 'produit', component: ProduitComponent },
  { path: 'produit/:mode', component: ProduitComponent },
  { path: 'detailCommande', component: DetailCommande },
  { path: 'detailCommande/:mode', component: DetailCommande },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'commande', component: DebutCommandeComponent },
  { path: 'choixproduit', component: CommandeProduitComponent },
  { path: 'choixformule', component: CompositionMenuComponent },
  { path: 'panier', component: PanierComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
