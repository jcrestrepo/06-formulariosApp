import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';


@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent  implements OnInit{

  // miFormulario: FormGroup = new FormGroup(
  //   {
  //     'nombre': new FormControl('Nombre Productosadsdfsdf'),
  //     'precio': new FormControl(0),
  //     'existencias': new FormControl(0),
  //   }
  // )
  ngOnInit(): void {
      this.miFormulario.setValue({
        nombre: 'RX--',
        precio: 1000,
        existencias: 10
      })
  }

  miFormulario: FormGroup = this.fb.group({

    nombre: ['', [Validators.required, Validators.minLength(3)]],
    precio: [, [Validators.required, Validators.min(0)]],
    existencias: [, [Validators.required, Validators.min(0)]]
  })

  constructor(private fb: FormBuilder) {

  }

  campoNoEsValido(campo: string) {


    return this.miFormulario.controls[campo].errors &&
      this.miFormulario.controls[campo].touched
  }

  guardar() {

    if (this.miFormulario.invalid) {
      this.miFormulario.markAllAsTouched();
    }
    console.log(this.miFormulario.value);
    this.miFormulario.reset();
  }

}
