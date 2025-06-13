import { Directive, input } from "@angular/core";

@Directive({
    selector: 'a[appSafeLink]',
    standalone: true,
    host:{
        '(click)':"onAgulardirect($event)"
    }
})
export class safelink{
    addpram = input()
    constructor(){
        console.log("Hello I am from directive :)");
    }
    onAgulardirect(event: MouseEvent){
       const onuserclick = window.confirm("Do you want to leave the page");

       if(onuserclick){
        const addhref = (event.target as HTMLAnchorElement).href;
        (event.target as HTMLAnchorElement).href = addhref + "?from="+this.addpram();
        
        return
       }
       event?.preventDefault();
    }

}