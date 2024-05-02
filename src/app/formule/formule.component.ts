import { Component } from '@angular/core';
import { FormuleHttpService } from '../formule-http.service';
import { ActivatedRoute } from '@angular/router';
import { Formule } from '../model';

@Component({
  selector: 'app-formule',
  templateUrl: './formule.component.html',
  styleUrl: './formule.component.css',
})
export class FormuleComponent {
  ajoutFormuleForm?: Formule = undefined;
  types = [
    { id: 1, name: 'Entree' },
    { id: 2, name: 'Plat' },
    { id: 3, name: 'Dessert' },
    { id: 4, name: 'Boisson' },
  ];

  //ajoutformule: boolean = false;
  constructor(
    private formuleHttpService: FormuleHttpService,
    private route: ActivatedRoute
  ) {}
  list() {
    return this.formuleHttpService.findAll();
  }

  edit(id?: number) {
    this.formuleHttpService.findById(id).subscribe((resp) => {
      this.ajoutFormuleForm = resp;
    });
  }

  add() {
    //this.ajoutformule = true;
    this.ajoutFormuleForm = new Formule();
  }

  save() {
    if (this.ajoutFormuleForm) {
      if (this.ajoutFormuleForm?.id) {
        this.formuleHttpService.update(this.ajoutFormuleForm);
      } else {
        this.formuleHttpService.insert(this.ajoutFormuleForm);
      }
      this.ajoutFormuleForm = undefined;
    }
  }

  cancel() {
    this.ajoutFormuleForm = undefined;
  }

  remove(id?: number) {
    this.formuleHttpService.delete(id);
  }
}
