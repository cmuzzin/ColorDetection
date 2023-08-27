import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Palette, Swatch } from 'node-vibrant/lib/color';

@Component({
  selector: 'app-variant-modal',
  templateUrl: './variant-modal.component.html',
  styleUrls: ['./variant-modal.component.scss'],
})
export class VariantModalComponent  implements OnInit {
  palette: Palette | undefined;
  selectedSwatch!: Swatch;
  swatches: Array<Swatch | undefined> = [];
  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
    if (this.palette) {
      this.swatches = Object.values(this.palette);
    }
  }

  cancel() {
    return this.modalCtrl.dismiss(this.selectedSwatch, 'cancel');
  }

  select(swatch: Swatch | undefined) {
    return this.modalCtrl.dismiss(swatch, 'select');
  }

}
