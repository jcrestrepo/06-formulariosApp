import { Component } from '@angular/core';

@Component({
  selector: 'app-swithces',
  templateUrl: './swithces.component.html',
  styles: [
  ]
})
export class SwithcesComponent  {

 persona= {
   genero:'',
   notificaciones: true
 }
 terminosYCondiciones:boolean= true;

}
