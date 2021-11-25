import { NgTemplateOutlet } from '@angular/common';
import { Injectable } from '@angular/core';
import { AbstractControl, FormControl, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {

  public nombreApellidoPattern:string='([a-zA-Z]+) ([a-zA-Z]+)';
  public emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

  public noPuedeSerX(control:FormControl) : ValidationErrors | null{
    const ctr:string= control.value?.trim();
    
    if(ctr==='xx'){
      //
      return {
        noX:true
      };
    }
    return null
  }

  camposIguales(campo1:string, campo2:string) : ValidationErrors | null{
    return (control:AbstractControl) =>{
      console.log('asdasdas')
       const pass1= control.get(campo1)?.value;
      const pass2= control.get(campo2)?.value;
      if (pass1!==pass2) {
        control.get(campo2)?.setErrors({ noiguales:true});
        return{ noiguales:true}
      }

      control.get(campo2)?.setErrors(null);
      return null;
    }
  }
  constructor() { }
}
