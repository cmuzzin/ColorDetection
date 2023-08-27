import { Component, ElementRef, ViewChild } from '@angular/core';
import { StorageService } from '../shared/services/storage.service';
import { Swatch } from 'node-vibrant/lib/color';
import { Color } from '../tab1/tab1.page';
import { DndDropEvent } from 'ngx-drag-drop';
import { PopoverController } from '@ionic/angular';
import { MixingPopoverComponent } from './mixing-popover/mixing-popover.component';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  colors: Array<{id: string, hex: string}> = [];
  draggable = {
    // note that data is handled with JSON.stringify/JSON.parse
    // only set simple data or POJO's as methods will be lost
    data: "myDragData",
    effectAllowed: "all",
    disable: false,
    handle: false
  };
  mixingColors: Array<{id: string, hex: string}> = [];
  @ViewChild('popover') popover: any;
  popoverOpen: boolean = false;
  constructor(private popoverController: PopoverController, private storageService: StorageService) {}

  ionViewDidEnter() {
    this.storageService.ionicStorage.forEach(item => {
      console.log(item);
      this.colors.push(item);
    })
  }

  ionViewDidLeave() {
    this.colors = [];
  }

  onDragStart(event: Event) {
    console.log("drag started", event);
  }

  onDragover(event:DragEvent) {
    console.log(event);
  }


  onDrop(event:DndDropEvent) {
    console.log("dropped", event);
    this.mixingColors = this.mixingColors.concat(event.data);
  }

  async presentPopover(e: Event) {
    const popover = await this.popoverController.create({
      component: MixingPopoverComponent,
      componentProps: {
        mixingColors: this.mixingColors
      },
      event: e,
      showBackdrop: false,
      size: 'auto',
      side: 'top',
      alignment: 'start',

    });

    if (this.mixingColors.length > 0) {
      await popover.present();
    }

    const { role } = await popover.onDidDismiss();
  }

}
