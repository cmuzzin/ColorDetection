import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mixing-popover',
  templateUrl: './mixing-popover.component.html',
  styleUrls: ['./mixing-popover.component.scss'],
})
export class MixingPopoverComponent  implements OnInit {
  mixingColors: Array<{id: string, hex: string}> = [];
  constructor() { }

  ngOnInit() {
    console.log(this.mixingColors);
  }

}
