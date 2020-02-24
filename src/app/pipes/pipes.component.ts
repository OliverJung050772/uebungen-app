import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';
import {map, filter, take} from 'rxjs/operators';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  dataSource = of (1,2,3,4,5,6,7,8,9,10);

  outputValue: number;

  constructor() { }

  ngOnInit(): void {
    this.dataSource.pipe(map(value => value + 2),
      filter(value => value % 2 === 0),
      take(1)).subscribe(value => this.outputValue = value);
  }

}
