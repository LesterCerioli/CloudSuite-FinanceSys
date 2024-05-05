import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-account-register',
  templateUrl: './account-register.component.html',
  styleUrl: './account-register.component.scss'
})
export class AccountRegisterComponent {
  civilStatusOptions = ['Solteiro', 'Casado', 'Separado Judicialmente', 'Viúvo'];
  accountForm: FormGroup = this.fb.group({
    fullName: ['', [Validators.required]],
    cpf: ['', [Validators.required, Validators.pattern(/^\d{11}$/)]],
    birthDate: ['', [Validators.required]],
    civilStatus: this.buildCivilStatusControls()
  });

  constructor(private fb: FormBuilder) {}

  buildCivilStatusControls() {
    const arr = this.civilStatusOptions.map(() => {
      return this.fb.control(false);
    });
    return this.fb.array(arr);
  }

  get civilStatusFormArray() {
    return this.accountForm.get('cityStatus') as FormArray;
  }

  onSubmit() {
    const selectedStatuses = this.civilStatusFormArray.value
      .map((checked: boolean, i: number) => checked ? this.civilStatusOptions[i] : null)
      .filter((v: null | string) => v !== null);
    console.log({
      ...this.accountForm.value,
      civilStatus: selectedStatuses

    });

  }

}
