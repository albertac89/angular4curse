import {Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  intervalRef: any;
  counter: number;
  @Output() incrementEvent = new EventEmitter<number>();
  @Output() incrementStopped = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.counter = 0;
  }

  start() {
    this.intervalRef = setInterval(() => {
      this.counter++;
      this.incrementEvent.emit(this.counter);
    }, 1000);
  }

  stop() {
    clearInterval(this.intervalRef);
    this.incrementStopped.emit();
    this.counter = 0;
  }
}
