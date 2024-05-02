import { Pipe, PipeTransform } from '@angular/core';
import { Produit } from './model';

@Pipe({
  name: 'dansFormulePipe'
})
export class DansFormulePipePipe implements PipeTransform {

  transform(produits: Array<Produit> | null): Array<Produit> | null{
    if(produits){
      return produits.filter(p => p.dansFormule == true);
    }
    return null;
  }

}
