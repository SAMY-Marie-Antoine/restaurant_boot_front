import { Injectable } from '@angular/core';
import { DetailCommande } from './model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from './environments/environment';

@Injectable({
  providedIn: 'root',
})
export class DetailCommandeService {
  private detailCommandes: Array<DetailCommande> = new Array<DetailCommande>();

  constructor(private http: HttpClient) {
    this.load();
  }
  load() {
    this.http
      .get<DetailCommande[]>('http://localhost:8080/api/detailCommande')
      .subscribe((resp) => {
        this.detailCommandes = resp;
      });
  }

  findAll(): DetailCommande[] {
    return this.detailCommandes;
  }

  findById(id?: number): Observable<DetailCommande> {
    return this.http.get<DetailCommande>(
      environment.apiUrl + '/detailCommande/' + id
    );
  }

  create(detailCommande: DetailCommande): void {
    this.http
      .post<DetailCommande>(
        environment.apiUrl + '/detailCommande',
        detailCommande
      )
      .subscribe((resp) => {
        this.load();
      });
  }

  update(detailCommande: DetailCommande): void {
    this.http
      .put<DetailCommande>(
        environment.apiUrl + '/detailCommande/' + detailCommande.id,
        detailCommande
      )
      .subscribe((resp) => {
        this.load();
      });
  }

  delete(id?: number): void {
    this.http
      .delete<void>(environment.apiUrl + '/detailCommande/' + id)
      .subscribe((resp) => {
        this.load();
      });
  }

  inscription(inscriptionDetailCommande: any): Observable<DetailCommande> {
    return this.http.post<DetailCommande>(
      environment.apiUrl + '/detailCommande',
      inscriptionDetailCommande
    );
  }
}
