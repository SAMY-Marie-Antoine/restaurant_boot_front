import { Component } from '@angular/core';
import { DetailCommandeService } from '../detail-commande.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Commande, DetailCommande, Menu } from '../model';
import { CommandeHttpService } from '../commande-http.service';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrl: './panier.component.css',
})
export class PanierComponent {
  detailCommande?: DetailCommande = undefined;
  ajout: boolean = false;

  constructor(private cmdService: CommandeHttpService, private router :  Router, private http : HttpClient) {
   
  }

  list() {
    return this.cmdService.commandeEnCours?.detailCommandes;
  }

  edit(id?: number) {
    // this.detailCommandeHttpService.findById(id).subscribe((resp) => {
    //   this.detailCommande = resp;
    ;
  }

  add() {
    // this.ajout = true;
  }

  save() {
    this.cmdService.save().subscribe(
      resp =>
        { 
          console.log(resp.id);
          let id = resp.id;
        if(id){
          this.cmdService.commandeEnCours?.detailCommandes?.forEach(
            d => {
              d.commande = new Commande();
              d.commande.id = id; 
              if(d.menu)
                {
                  this.http.post<Menu>(environment.apiUrl+"/menus",d.menu).subscribe(
                    recu => {
                      if(d.menu)
                        {
                          d.menu.id = recu.id;
                          this.http.post(environment.apiUrl+"/detailCommande",d).subscribe();
                        }
                      }
                  );
                }
              else if (d.produit)
              {
                this.http.post(environment.apiUrl+"/detailCommande",d).subscribe();
              }
            }
             );
             this.reset();
        }
        }
    );
    this.router.navigate(["/"])
  }

  totalCmd(){
    let total: number = 0;
    this.cmdService.commandeEnCours?.detailCommandes?.forEach(d => total = total+d.total)
    return total;
  }

  reset(){
    this.cmdService.resetCommandeEncours();
  }

  cancel() {
   // this.detailCommande = undefined;
  }

  remove(id?: number) {
   // this.detailCommandeHttpService.delete(id);
  }
}
