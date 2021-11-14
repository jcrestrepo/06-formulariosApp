import { Directive, Input } from '@angular/core';
import { Validator, NG_VALIDATORS, FormControl } from '@angular/forms';

@Directive({
    selector: '[minimo][ngModel]',
    providers: [
        { provide: NG_VALIDATORS, useExisting: CustomMinDirective, multi: true }
    ]
})

export class CustomMinDirective implements Validator {
    
    @Input() minimo!:number;
    
    constructor(){

    }
    validate(c: FormControl): { [key: string]: any } | null {
        const inputValue=c.value;
        if (inputValue < this.minimo) {
            return {'customMin':true}
        }else
        {
            return null;
        }
        
    }
}