import { Injectable } from '@angular/core';
import { Formule } from './model';
import { HttpClient } from '@angular/common/http';
import { environment } from './environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormuleHttpService {

  private formules: Array<Formule> = new Array<Formule>();

  constructor(private http: HttpClient) {
    this.load()
   }

  load(){
    this.http.get<Formule[]>(environment.apiUrl + "/formule").subscribe(resp => this.formules = resp)
  }

  findAll():Formule[]{
    return this.formules;
  }

  findById(id? : number) : Observable<Formule>{
    return this.http.get<Formule>(environment.apiUrl + '/formule/' + id);
  }

  insert(formule : Formule){
    this.http.post<Formule>(environment.apiUrl+'/formule/',formule).subscribe((resp)=>{
      this.load();
    });
  }

  update(formule : Formule){
    this.http.put<Formule>(environment.apiUrl+'/formule/'+formule.id,formule).subscribe((resp)=>{
      this.load();
    });
  }

  delete(id? : number){
    this.http.delete(environment.apiUrl+'/formule/'+id).subscribe((resp)=>{
      this.load();
    });
  }
}
