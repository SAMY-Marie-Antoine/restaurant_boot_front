import { Injectable } from '@angular/core';
import { Commande, DetailCommande} from './model';
import { HttpClient } from '@angular/common/http';
import { environment } from './environments/environment';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class CommandeHttpService {

  private commandes?: Array<Commande>;
  public commandeEnCours?: Commande;

  constructor(private http: HttpClient, private authService : AuthService) {
    this.load()
   }

  load(){
    this.http.get<Commande[]>(environment.apiUrl + "/commande").subscribe(resp => this.commandes = resp)
  }

  startNewCommande(){
    this.commandeEnCours = new Commande();
    this.commandeEnCours.client = this.authService.getUtilisateur();
    this.commandeEnCours.detailCommandes = new Array<DetailCommande>();
  }

  addToCommandeEnCours(detailCommande : DetailCommande){
    this.commandeEnCours?.detailCommandes?.push(detailCommande);
  }

  modifCommandeEnCours(detailCommande : DetailCommande){
    let idx = this.commandeEnCours?.detailCommandes?.findIndex(d => d.id == detailCommande.id);
    if(idx && this.commandeEnCours?.detailCommandes){
      this.commandeEnCours.detailCommandes[idx] = detailCommande;
    }
  }

  validCommandeEnCours(){
    if(this.commandeEnCours){
      this.insert(this.commandeEnCours);
      this.commandeEnCours = undefined;
    }
  }

  findAll(){
    return this.commandes;
  }

  findById(id? : number) : Observable<Commande>{
    return this.http.get<Commande>(environment.apiUrl + '/commande/' + id);
  }

  insert(commande : Commande){
    this.http.post<Commande>(environment.apiUrl+'/commande/',commande);
  }

  update(commande : Commande){
    this.http.put<Commande>(environment.apiUrl+'/commande/'+commande.id,commande);
  }

  delete(commande : Commande){
    this.http.delete(environment.apiUrl+'/commande/'+commande.id);
  }
}
