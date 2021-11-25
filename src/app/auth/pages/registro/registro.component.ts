import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ValidatorService } from '../../../shared/validator/validator.service';
import { EmailValidatorService } from '../../../shared/validator/email-validator.service';



@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html'
})
export class RegistroComponent implements OnInit {

  //TODO Temporal
  

  miFormulario:FormGroup= this.fb.group({
    nombre:['', [Validators.required, Validators.pattern(this.vs.nombreApellidoPattern)]],
    email:['', [Validators.required, Validators.pattern(this.vs.emailPattern)], [this.emailValidator]],
    userName:['', [Validators.required, this.vs.noPuedeSerX]],
    password:['', [Validators.required, Validators.minLength(6)]],
    confirmar:['', [Validators.required]],
  }, {
    validators:[this.vs.camposIguales('password', 'confirmar')]
  })
  constructor(private fb:FormBuilder, private vs:ValidatorService, private emailValidator: EmailValidatorService) { 

  }

  ngOnInit(): void {
    this.miFormulario.reset({
      nombre:'Juan Carlos',
    })
  }
  campoNoValido(campo:string){

    return this.miFormulario.get(campo)?.invalid && this.miFormulario.get(campo)?.touched;

  }
  onSubmit(){

    this.miFormulario.markAllAsTouched();
  }

}
