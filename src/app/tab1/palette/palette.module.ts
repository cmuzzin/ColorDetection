import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PaletteComponent } from './palette.component';
import { VariantModalComponentModule } from '../variant-modal/variant-model.module';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule, VariantModalComponentModule],
  declarations: [PaletteComponent],
  exports: [PaletteComponent]
})
export class PalletteComponentModule {}
