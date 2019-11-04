import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'custom-buttom',
  template: `
    <div>
      <p>
        Angular app - Angular V. 8.2.13
      </p>
      <h3> {{ name }} </h3>
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
  constructor() { }

  ngOnInit() {
  }

}
