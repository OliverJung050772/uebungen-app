import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent implements OnInit {

    button: any;

    myObservable: any;
    subscription: any;

    clickCount: number;

    constructor() { }

    handleButtonClick(clickEvent: any): void {
        console.log(clickEvent);
        this.clickCount++;
    }

    ngOnInit(): void {
        this.clickCount = 0;
        this.button = document.getElementById("myButton");
        // Ein Observable für das Click-Event des Buttons registrieren
        this.myObservable = fromEvent(this.button, 'click');
        // Einen Subscriber für das Observable initialisieren
        this.subscription = this.myObservable.subscribe(
            event => this.handleButtonClick(event)
        );
    }

}
