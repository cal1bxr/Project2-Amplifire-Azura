export class Favoriteswithid {

    public favID : number;
    public email :string;
    public favoriteEmail: string;

    constructor(favID : number, email:string, favoriteEmail:string){

        this.favID = favID;
        this.email=email;
        this.favoriteEmail = favoriteEmail;
    }

}
