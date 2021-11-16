import { Component, OnInit,  } from '@angular/core';
import { FormBuilder, FormGroup, Validators, Validator } from '@angular/forms';

@Component({
  selector: 'app-swithces',
  templateUrl: './swithces.component.html',
  styles: [
  ]
})
export class SwithcesComponent implements OnInit {

  miFormulario:FormGroup=this.fb.group({
    genero: ['M',Validators.required],
    notificaciones: [true ,Validators.required],
    condiciones:[false, Validators.requiredTrue]

  });
 
  persona= {
    genero:'F',
    notificaciones: true

  }

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    
    this.miFormulario.reset({...this.persona , condiciones:false})
    this.miFormulario.valueChanges.subscribe( form =>{
      delete form.condiciones;
      this.persona=form;
    });
  }
  guardar(){
    const formValue= {...this.miFormulario.value};
    delete formValue.condiciones;
    console.log(formValue);
    this.persona=formValue;

  }
}
