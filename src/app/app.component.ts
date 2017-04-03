import { Component, OnInit , ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit{

  oddArray: number[];
  evenArray: number[];

  ngOnInit() {
    this.oddArray = [];
    this.evenArray = [];
  }

  onIncrementEvent(increment: number) {
    if(increment % 2 === 0) {
      this.evenArray.push(increment);
    } else {
      this.oddArray.push(increment);
    }
  }

  resetIncrement() {
    this.oddArray = [];
    this.evenArray = [];
  }
}
