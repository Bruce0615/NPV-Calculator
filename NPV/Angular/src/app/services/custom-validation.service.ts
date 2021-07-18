import { Injectable } from '@angular/core';
import { AbstractControl, ValidatorFn } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CustomValidationService {

    greaterThan(field: string): ValidatorFn {
        return (control: AbstractControl): {[key: string]: any} => {
          const group = control.parent;
          const fieldToCompare = group.get(field);
          const isLessThan = Number(fieldToCompare.value) >= Number(control.value);
          return isLessThan ? {'lessThan': {value: control.value}} : null;
        }
    }
}
