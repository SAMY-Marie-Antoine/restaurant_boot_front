import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjouterProduitComponent } from './ajouter-produit/ajouter-produit.component';
import { ProduitComponent } from './produit/produit.component';

const routes: Routes = [
  { path: 'ajouterProduit', component: AjouterProduitComponent },
  { path: 'produit', component: ProduitComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
