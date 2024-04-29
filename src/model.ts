export class Utilisateur {
    public id?: number;
    public username?: string;
    public password?: string;
    public gestionnaire?: boolean;

    constructor(id? : number, username? : string, password? : string, gestionnaire?: boolean) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.gestionnaire = gestionnaire;
    }
}