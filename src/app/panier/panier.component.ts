import { Component } from '@angular/core';
import { DetailCommandeService } from '../detail-commande.service';
import { ActivatedRoute } from '@angular/router';
import { DetailCommande } from '../model';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrl: './panier.component.css',
})
export class PanierComponent {
  detailCommande?: DetailCommande = undefined;
  ajout: boolean = false;

  constructor(
    private detailCommandeHttpService: DetailCommandeService,
    private commandeHttpService: CommandeService,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe((params) => {
      if (params['mode'] == 'add') {
        this.detailCommande = new DetailCommande();
      }
    });
  }
  list() {
    return this.detailCommandeHttpService.findAll();
  }

  edit(id?: number) {
    this.detailCommandeHttpService.findById(id).subscribe((resp) => {
      this.detailCommande = resp;
    });
  }

  add() {
    this.ajout = true;
  }

  save() {
    if (this.detailCommande) {
      if (this.detailCommande?.id) {
        this.detailCommandeHttpService.update(this.detailCommande);
      } else {
        this.detailCommandeHttpService.create(this.detailCommande);
      }
      this.detailCommande = undefined;
    }
  }

  cancel() {
    this.detailCommande = undefined;
  }

  remove(id?: number) {
    this.detailCommandeHttpService.delete(id);
  }
}
