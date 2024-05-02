import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AjouterProduitComponent } from './ajouter-produit/ajouter-produit.component';
import { ProduitComponent } from './produit/produit.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { PanierComponent } from './panier/panier.component';
import { CommandeProduitComponent } from './commande-produit/commande-produit.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { DebutCommandeComponent } from './debut-commande/debut-commande.component';
import { CompositionMenuComponent } from './composition-menu/composition-menu.component';
import { DansFormulePipePipe } from './dans-formule-pipe.pipe';
import { FormuleComponent } from './formule/formule.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { HistoriqueComponent } from './historique/historique.component';

@NgModule({
  declarations: [
    AppComponent,
    AjouterProduitComponent,
    ProduitComponent,
    LoginComponent,
    SignUpComponent,
    CommandeProduitComponent,
    NavBarComponent,
    DebutCommandeComponent,
    PanierComponent,
    CompositionMenuComponent,
    FormuleComponent,
    DansFormulePipePipe,
    HomeComponent,
    MenuComponent,
    HistoriqueComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
