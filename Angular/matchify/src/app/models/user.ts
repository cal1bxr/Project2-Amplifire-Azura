
export class User {
    
    email: string | undefined;
    firstName: string | undefined;
    lastName: string | undefined;
    description: string | undefined;
    artist1: string | undefined;
    artist2: string | undefined;
    artist3: string | undefined;
    artist4 : string | undefined;
    artist5 : string | undefined;
    artist6 : string | undefined;

    constructor(
        email: string | undefined, 
         firstName: string | undefined,
         lastName: string | undefined,
         description: string | undefined,
         artist1: string | undefined,
         artist2: string | undefined,
         artist3: string | undefined,
         artist4: string | undefined,
         artist5: string | undefined,
         artist6 : string | undefined
         ){

        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
        this.description = description;
        this.artist1 = artist1;
        this.artist2 = artist2;
        this.artist3 = artist3;
        this.artist4 = artist4;
        this.artist5 = artist5;
        this.artist6 = artist6;
       }
}
