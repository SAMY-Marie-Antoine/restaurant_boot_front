import { Injectable } from '@angular/core';
import { Produit } from '../model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProduitHttpService {
  private produits: Array<Produit> = new Array<Produit>();

  public entrees$?: Observable<Array<Produit>>;
  public plats$?:Observable<Array<Produit>>;
  public desserts$?:Observable<Array<Produit>>;
  public boissons$?:Observable<Array<Produit>>;

  constructor(private http: HttpClient) {
    this.load();
    this.entrees$ = this.findAllByType("entree");
    this.plats$ = this.findAllByType("plat");
    this.desserts$ = this.findAllByType("dessert");
    this.boissons$ = this.findAllByType("boisson");
  }

  load() {
    this.http
      .get<Produit[]>('http://localhost:8080/api/produit')
      .subscribe((resp) => {
        this.produits = resp;
      });
  }

  findAll(): Produit[] {
    return this.produits;
  }

  findAllByType(type : string) : Observable<Produit[]> {
    return this.http.get<Produit[]>(environment.apiUrl + '/produit/bytype/' + type)
  }

  findEntrees(){
    return this.entrees$;
  }

  findPlats(){
    return this.plats$;
  }

  findDesserts(){
    return this.desserts$;
  }

  findBoissons(){
    return this.boissons$;
  }

  findById(id?: number): Observable<Produit> {
    return this.http.get<Produit>(environment.apiUrl + '/produit/' + id);
  }

  create(produit: Produit): void {
    this.http
      .post<Produit>(environment.apiUrl + '/produit', produit)
      .subscribe((resp) => {
        this.load();
      });
  }

  update(produit: Produit): void {
    this.http
      .put<Produit>(environment.apiUrl + '/produit/' + produit.id, produit)
      .subscribe((resp) => {
        this.load();
      });
  }

  delete(id?: number): void {
    this.http
      .delete<void>(environment.apiUrl + '/produit/' + id)
      .subscribe((resp) => {
        this.load();
      });
  }
  inscription(inscriptionProduit: any): Observable<Produit> {
    return this.http.post<Produit>(
      environment.apiUrl + '/produit',
      inscriptionProduit
    );
  }
}
