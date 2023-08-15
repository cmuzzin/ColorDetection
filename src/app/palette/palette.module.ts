import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PaletteComponent } from './palette.component';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule],
  declarations: [PaletteComponent],
  exports: [PaletteComponent]
})
export class PalletteComponentModule {}
