import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab2Page } from './tab2.page';
import { Tab2PageRoutingModule } from './tab2-routing.module';
import { DndModule } from 'ngx-drag-drop';
import { MixingPopoverComponent } from './mixing-popover/mixing-popover.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    Tab2PageRoutingModule,
    DndModule
  ],
  declarations: [Tab2Page, MixingPopoverComponent]
})
export class Tab2PageModule {}
