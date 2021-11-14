import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TemplateRoutingModule } from './template-routing.module';
import { SwithcesComponent } from './swithces/swithces.component';
import { DinamicosComponent } from './dinamicos/dinamicos.component';
import { BasicosComponent } from './basicos/basicos.component';
import { CustomMinDirective } from './directives/custom-min.directives';



@NgModule({
  declarations: [
    SwithcesComponent,
    DinamicosComponent,
    BasicosComponent,
    CustomMinDirective
    
  ],
  imports: [
    CommonModule,
    TemplateRoutingModule,
    FormsModule
  ]
})
export class TemplateModule { }
