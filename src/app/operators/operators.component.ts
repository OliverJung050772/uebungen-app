import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-operators',
  templateUrl: './operators.component.html',
  styleUrls: ['./operators.component.css']
})
export class OperatorsComponent implements OnInit {

    // Mit 'of' den dataSource zu einem Observable machen
    dataSource = of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
    subscription: any;
    subscription_2: any;

    // für die Anzeige der Daten im view
    allNumbers: number[] = [];
    evenNumbers: number[] = [];

  constructor() { }

  ngOnInit(): void {
     // den Observable dataSource abonieren
     // pipe übergibt den Rückgabewert an die nächste Methode
     // map iteriert über die Werte und gibt veränderte Werte zurück
     this.subscription = this.dataSource
        .pipe(map(value => value + 1))
        .subscribe(value => {
            this.allNumbers.push(value);
            console.log(value);
        });
    // Werte filtern
    this.subscription_2 = this.dataSource
        .pipe(filter(value => value % 2 == 0))
        .subscribe(value => {
            this.evenNumbers.push(value);
            console.log(value);
        });
  }

}
