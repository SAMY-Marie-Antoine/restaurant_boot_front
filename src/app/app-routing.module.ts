import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjouterProduitComponent } from './ajouter-produit/ajouter-produit.component';
import { ProduitComponent } from './produit/produit.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  { path: 'ajouterProduit', component: AjouterProduitComponent },
  { path: 'produit', component: ProduitComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignUpComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
