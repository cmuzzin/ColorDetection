import { Component } from '@angular/core';
import { Camera, CameraResultType } from '@capacitor/camera';
import { Clipboard } from '@capacitor/clipboard';
import Vibrant from 'node-vibrant';
import { Palette, Swatch, Vec3 } from 'node-vibrant/lib/color';
import { StorageService } from '../shared/services/storage.service';

export interface Color {
  id: string;
  palette: Palette;
}

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  colors: Array<Color> = [];
  constructor(private storageService: StorageService) {}

  async getPhoto() {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.Uri,
    });
    if(image.webPath) {
      const vibrant = new Vibrant(image.webPath);
      vibrant.getPalette().then(palette => {
        const colorId =  image.webPath?.split('/')[3];
        const color  = { id: colorId?? '', palette }
        this.colors.push(color);
      });
    }
  };

  saveColor(item: {colorId: string, swatch: Swatch}) {
    console.log(item.swatch);
    this.storageService.setItem(item.colorId, item.swatch.hex);
  }

  deleteColor(color: Color) {
    this.colors = this.colors.filter(c => c.id !== color.id);
    this.storageService.removeItem(color);
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
