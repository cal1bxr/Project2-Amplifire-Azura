export class Favoriteswithid {

    public id : number;
    public email :string;
    public favoriteEmail: string;

    constructor(id : number, email:string, favoriteEmail:string){

        this.id = id;
        this.email=email;
        this.favoriteEmail = favoriteEmail;
    }

}
