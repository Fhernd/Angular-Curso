import { AbstractControl, ValidationErrors } from "@angular/forms";

export class ValidacionesPropias {
    static multiplo5(control: AbstractControl) : ValidationErrors | null {
        const numero = parseInt(control.value);

        return numero % 5 == 0 ? null : {multiplo5: true}
    }
}
