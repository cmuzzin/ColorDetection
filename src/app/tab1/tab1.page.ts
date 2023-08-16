import { Component } from '@angular/core';
import { Camera, CameraResultType } from '@capacitor/camera';
import { Storage } from '@ionic/storage-angular';
import { Clipboard } from '@capacitor/clipboard';
import Vibrant from 'node-vibrant';
import { Palette, Vec3 } from 'node-vibrant/lib/color';
import { ModalController } from '@ionic/angular';

export interface Color {
  id: string;
  imagePath: string | undefined;
  palette: Palette;
}

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  colors: Array<Color> = [];
  constructor(private storage: Storage) {}

  async ngOnInit() {
    await this.storage.create();
  }

  async getPhoto() {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.Uri,
    });
    if(image.webPath) {
      const vibrant = new Vibrant(image.webPath);
      vibrant.getPalette().then(palette => {
        console.log(palette);
        this.colors.push({ id: image.webPath?.split('/')[3] ?? '', imagePath: image.webPath, palette });
      });
    }
  };

  saveColor(color: Color) {
    this.storage.set(color.id, color);
  }

  deleteColor(color: Color) {
    this.colors = this.colors.filter(c => c.id !== color.id);
    this.storage.remove(color.id);
  }

  async copyHex(hexValue: string) {
    await Clipboard.write({
      string: hexValue,
    });
  }

  async copyRGB(rgbValue: Vec3) {
    await Clipboard.write({
      string: rgbValue.join(', '),
    });
  }

  async copyHSL(hslValue: Vec3) {
    await Clipboard.write({
      string: hslValue.join(', '),
    });
  }


}
