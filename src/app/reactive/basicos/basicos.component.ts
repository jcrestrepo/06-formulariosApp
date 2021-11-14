import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent  {

  // miFormulario: FormGroup = new FormGroup(
  //   {
  //     'nombre': new FormControl('Nombre Productosadsdfsdf'),
  //     'precio': new FormControl(0),
  //     'existencias': new FormControl(0),
  //   }
  // )

  miFormulario: FormGroup = this.fb.group({
    
  })

  constructor(private fb:FormBuilder) {

   }


}
