import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Color } from '../tab1/tab1.page';
import { Vec3 } from 'node-vibrant/lib/color';

@Component({
  selector: 'app-palette',
  templateUrl: './palette.component.html',
  styleUrls: ['./palette.component.scss'],
})
export class PaletteComponent  implements OnInit {
  @Input() color?: Color;
  @Output() saveColorEvent = new EventEmitter<Color>();
  @Output() deleteColorEvent = new EventEmitter<Color>();
  @Output() copyHexEvent = new EventEmitter<string>();
  @Output() copyRGBEvent = new EventEmitter<Vec3>();
  @Output() copyHSLEvent = new EventEmitter<Vec3>();
  constructor() { }

  ngOnInit() {}

  saveColor(color: Color) {
    this.saveColorEvent.emit(color);
  }

  deleteColor(color: Color) {
    this.deleteColorEvent.emit(color);
  }

  copyHex(hexValue: string) {
    this.copyHexEvent.emit(hexValue);
  }

  copyRGB(rgbValue: Vec3) {
    this.copyRGBEvent.emit(rgbValue);
  }

  copyHSL(hslValue: Vec3) {
    this.copyHSLEvent.emit(hslValue);
  }

}
