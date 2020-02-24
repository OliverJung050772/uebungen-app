import { Component, OnInit } from '@angular/core';
import {fromEvent, of} from 'rxjs';
import {map, filter, combineLatest, shareReplay} from 'rxjs/operators';

@Component({
  selector: 'app-operators',
  templateUrl: './operators.component.html',
  styleUrls: ['./operators.component.css']
})
export class OperatorsComponent implements OnInit {

    // Mit 'of' den dataSource zu einem Observable machen
    dataSource = of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
    subscription: any;
    subscription2: any;
    myObservable: any;

    // für die Anzeige der Daten im view
    allNumbers: number[] = [];
    evenNumbers: number[] = [];
    result: number;
    button2: any;

  constructor() { }

  fillAllNumbers(): void {
    // den Observable dataSource abonieren
    // pipe übergibt den Rückgabewert an die nächste Methode
    // map iteriert über die Werte und gibt veränderte Werte zurück
    this.subscription = this.dataSource
      .pipe(map(value => value + 1))
      .subscribe(value => {
        this.allNumbers.push(value);
        console.log(value);
    });
  }

  fillEvenNumbers(): void {
    // Werte filtern
    this.subscription2 = this.dataSource
      .pipe(filter(value => value % 2 == 0))
      .subscribe(value => {
        this.evenNumbers.push(value);
        console.log(value);
      });
  }

  /*
  addNumbersFromArrays(): void {
    combineLatest(of(this.allNumbers), of(this.evenNumbers)).subscribe(
      ([latestAll, latestEven]) => this.numbersSum = latestAll + latestEven
    );
  }
  */

  multicastOperation(clickEvent: any): void {
    const source = this.dataSource.pipe(shareReplay());
    source.subscribe(value => this.result = value * 10);
    source.subscribe(value => this.result = value * 100);
  }

  ngOnInit(): void {
    this.button2 = document.getElementById('button2');
    this.myObservable = fromEvent(this.button2, 'click');
    this.myObservable.subscribe(event => this.multicastOperation(event));
    this.fillAllNumbers();
    this.fillEvenNumbers();
  }

}
