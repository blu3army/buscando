export class Debouncer{

    seconds:number;
    timeID?:number;

    constructor(time:number){
        this.seconds = time;
    }

    // setup(myFunction:any) {
        
    //     this.timeID = window.setTimeout( myFunction , this.seconds);

    // }

    // cancel():void {

    //     window.clearTimeout(this.timeID);

    // }


}