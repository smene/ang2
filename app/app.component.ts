import { Component, OnInit } from "@angular/core";


@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
})
export class AppComponent implements OnInit {
    name:string = 'Nobody';

    constructor() {
        this.name = "Stavros";
    }
    ngOnInit() {

    }
}
