import { Component, OnInit, ViewEncapsulation, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'custom-buttom',
  template: `
    <div>
      <p>
        Angular app - Angular V. 8.2.13
      </p>
      <h3> {{ name }} </h3>
      <button type="submit" class="btn btn-secondary" (click)="helloEvt.next()">Say hello</button>
    </div>
  `,
  styles: [`
    h3 {
      background-color: orange;
    }
    div {
      color: black;
      background-color: white;
    }
  `],
  encapsulation: ViewEncapsulation.Native
})
export class ButtonComponent implements OnInit {
  @Input() name = "Some test text"
  @Output() helloEvt: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
