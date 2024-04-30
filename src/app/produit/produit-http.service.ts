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

  constructor(private http: HttpClient) {
    this.load();
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
      environment.apiUrl + '/produit/inscription',
      inscriptionProduit
    );
  }
}
