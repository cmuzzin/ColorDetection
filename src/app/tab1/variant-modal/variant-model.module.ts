import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { VariantModalComponent } from './variant-modal.component';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule],
  declarations: [VariantModalComponent],
  exports: [VariantModalComponent]
})
export class VariantModalComponentModule {}
