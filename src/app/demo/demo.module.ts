import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { MaterialModule } from '../shared/material.module';
import { MaterialModule } from '../shared/material.module';
//import { FormsModule } from '@angular/forms';
import { DemoRoutingModule } from './demo-routing.module';
import { ButtonsComponent } from './buttons/buttons.component';
//import { FlexboxComponent } from './demo/flexbox/flexbox.component';
import { FlexboxComponent } from './flexbox/flexbox.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [ButtonsComponent, FlexboxComponent], //FlexboxComponent
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    FlexLayoutModule,
    //FormsModule,
    DemoRoutingModule
  ]
})
export class DemoModule { }
