interface UserInterface{

    uid:            string;
    username:       string;
    displayName:    string;
    email:          string;

}

export class User implements UserInterface{
    uid: string;
    username: string;
    displayName: string;
    email: string;
    
    constructor(user:UserInterface){
        this.uid = user.uid;
        this.username = user.username;
        this.displayName = user.displayName;
        this.email = user.email;
    }

}