import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Color } from '../tab1/tab1.page';
import { Palette, Vec3 } from 'node-vibrant/lib/color';
import { ModalController } from '@ionic/angular';
import { VariantModalComponent } from '../variant-modal/variant-modal.component';

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
  
  constructor(private modalCtrl: ModalController) { }

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

  async openModal(palette: Palette) {
    const modal = await this.modalCtrl.create({
      component: VariantModalComponent,
      componentProps: {
        palette,
      },
    });
    modal.present();

    const { data, role } = await modal.onWillDismiss();
  }

}
