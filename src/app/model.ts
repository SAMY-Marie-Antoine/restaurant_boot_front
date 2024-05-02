import { Time } from "@angular/common";

export class Produit {
  public id?: number;
  public libelle?: string;
  public prix?: number;
  public stock?: number;
  public dansFormule?: boolean;
  public type?: string;
  public allergieOeuf?: boolean;
  public allergieGluten?: boolean;
  public allergieArachide?: boolean;
  public allergieLait?: boolean;
  public allergieSoja?: boolean;
  public hallal?: boolean;
  public vegan?: boolean;

  constructor(
    id?: number,
    libelle?: string,
    prix?: number,
    stock?: number,
    dansFormule?: boolean,
    type?: string,
    allergieOeuf?: boolean,
    allergieGluten?: boolean,
    allergieArachide?: boolean,
    allergieLait?: boolean,
    allergieSoja?: boolean,
    hallal?: boolean,
    vegan?: boolean
  ) {
    this.id = id;
    this.libelle = libelle;
    this.prix = prix;
    this.stock = stock;
    this.dansFormule = dansFormule;
    this.type = type;
    this.allergieOeuf = allergieOeuf;
    this.allergieGluten = allergieGluten;
    this.allergieArachide = allergieArachide;
    this.allergieLait = allergieLait;
    this.allergieSoja = allergieSoja;
    this.hallal = hallal;
    this.vegan = vegan;
  }
}

export class Utilisateur {
  public id?: number;
  public username?: string;
  public password?: string;
  public gestionnaire?: boolean;

  constructor(
    id?: number,
    username?: string,
    password?: string,
    gestionnaire?: boolean
  ) {
    this.id = id;
    this.username = username;
    this.password = password;
    this.gestionnaire = gestionnaire;
  }
}

export class Formule {
  public id?: number;
  public libelle?: string;
  public prix?: number;
  public typeProduits?: Array<string>;

  constructor(
    id?: number,
    libelle?: string,
    prix?: number,
    typeProduits?: Array<string>
  ) {
    this.id = id;
    this.libelle = libelle;
    this.prix = prix;
    this.typeProduits = typeProduits;
  }
}

export class DetailCommande {
  public id?:number;
  public prix?:number;
  public qte?:number;
  public commande?:Commande;
  public produit?: Produit;
  public menu?: Menu;
  public total! : number;

  constructor(id? : number, prix?: number, qte?:number, commande?:Commande, produit?:Produit, menu?:Menu){
    this.id = id;
    this.prix = prix;
    this.qte = qte;
    this.commande = commande;
    this.produit = produit;
    this.menu = menu;
    if(prix && qte){
    this.total = prix * qte;
    }
    else{
      this.total = 0;
    }
  }
}

export class Commande {
  public id? : number;
  public client? : Utilisateur;
  public avis? : Avis;
  public detailCommandes? : Array<DetailCommande>;
  public commentaire? : string;
  public dateCommande? : Date;
  public heureCommande? : Time;

  constructor(id? : number, client?: Utilisateur, avis? : Avis, detailCommandes? : Array<DetailCommande>, commentaire?:string,dateCommande? : Date, heureCommande? : Time){
    this.id = id;
    this.client = client;
    this.avis = avis;
    this.detailCommandes = detailCommandes;
    this.commentaire = commentaire;
    this.dateCommande = dateCommande;
    this.heureCommande = heureCommande;
  }
}

export class Menu{
  public id? : number;
  public produits? : Array<Produit>;
  public formule? : Formule;

  constructor(id?:number,produits?:Array<Produit>,formule?:Formule){
    this.id = id;
    this.produits = produits;
    this.formule = formule;
  }
}

export class Avis{
  public id?:number;
  public avis? : string;
  public commande? : Commande;
  public heure? : Time;
  public date? : Date;

  constructor(id?:number,avis?:string,commande?:Commande,heure?:Time,date?:Date){
    this.id = id;
    this.avis = avis;
    this.commande = commande;
    this.heure = heure;
    this.date = date;
  }
}