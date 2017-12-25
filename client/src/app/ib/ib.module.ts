import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { BajoComponent } from './bajo/bajo.component';
import { B1Component }  from './bajo/b1/b1.component';
import { B2Component} from './bajo/b2/b2.component';
import { B3Component } from './bajo/b3/b3.component';

import { ModeradoComponent } from './moderado/moderado.component';


import { IbComponent } from './ib.component';

import { IbRoutingModule } from './ib-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IbRoutingModule
  ],
  declarations: [
     B1Component,
     B2Component,
     BajoComponent,
     B3Component,
     IbComponent,
     ModeradoComponent],
  providers: []
})

export class IbModule {}
