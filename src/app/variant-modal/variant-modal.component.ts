import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Palette } from 'node-vibrant/lib/color';

@Component({
  selector: 'app-variant-modal',
  templateUrl: './variant-modal.component.html',
  styleUrls: ['./variant-modal.component.scss'],
})
export class VariantModalComponent  implements OnInit {
  palette: Palette | undefined;
  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
    console.log(this.palette);
  }

  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  confirm() {
    return this.modalCtrl.dismiss('test', 'confirm');
  }

}
