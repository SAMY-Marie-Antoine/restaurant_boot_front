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
