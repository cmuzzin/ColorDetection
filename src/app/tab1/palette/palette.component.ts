import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Color } from '../tab1.page';
import { Palette, Swatch, Vec3 } from 'node-vibrant/lib/color';
import { ModalController } from '@ionic/angular';
import { VariantModalComponent } from '../variant-modal/variant-modal.component';

@Component({
  selector: 'app-palette',
  templateUrl: './palette.component.html',
  styleUrls: ['./palette.component.scss'],
})
export class PaletteComponent  implements OnInit {
  @Input() color?: Color;
  @Output() saveColorEvent = new EventEmitter<{colorId: string, swatch: Swatch}>();
  @Output() deleteColorEvent = new EventEmitter<Color>();
  @Output() copyHexEvent = new EventEmitter<string>();
  @Output() copyRGBEvent = new EventEmitter<Vec3>();
  @Output() copyHSLEvent = new EventEmitter<Vec3>();
  selectedSwatch?: Swatch;
  
  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
    this.selectedSwatch = this.color?.palette.Vibrant;
  }

  saveColor(color: Color) {
    if (this.selectedSwatch) {
      this.saveColorEvent.emit({colorId: color.id, swatch: this.selectedSwatch});
    }
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
      backdropDismiss:false,
      component: VariantModalComponent,
      componentProps: {
        palette,
        selectedSwatch: this.selectedSwatch
      },
    });
    modal.present();

    const { data } = await modal.onWillDismiss();
    this.selectedSwatch = data;
  }

}
