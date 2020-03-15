import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistrazionePageRoutingModule } from './registrazione-routing.module';

import { RegistrazionePage } from './registrazione.page';
import { LocationSelectionPageModule } from 'src/app/pages/location-selection/location-selection.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistrazionePageRoutingModule,
    LocationSelectionPageModule
  ],
  declarations: [RegistrazionePage]
})
export class RegistrazionePageModule {}
