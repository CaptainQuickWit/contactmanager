import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../shared/material.module';

import { DemoRoutingModule } from './demo-routing.module';
import { ButtonsComponent } from './buttons/buttons.component';
import { FormsModule} from '@angular/forms'


@NgModule({
  declarations: [
    ButtonsComponent
  ],
  imports: [
    CommonModule,
    DemoRoutingModule,
    MaterialModule,
    FormsModule,
    DemoModule
  ]
})
export class DemoModule { }
