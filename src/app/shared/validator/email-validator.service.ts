import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AbstractControl, AsyncValidator, ValidationErrors, Validator } from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class EmailValidatorService implements AsyncValidator{

  validate(control: AbstractControl): Observable<ValidationErrors | null> {
    const email=control.value;  
    
    const urlse:string= 'http://localhost:3000/usuarios?q='+email;
    return this.http.get<any[]>(urlse)
      .pipe(
        map(resp=>{
            return ( resp.length===0)
              ? null
              : {emailTomado:true}
          }

        )
      );
  }
  constructor(private http:HttpClient) { }
}
