import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EmailValidators, UniversalValidators } from 'ngx-validators';
import { RegistrationRequestModel } from './registration-request.model';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss'],
})
export class RegistrationFormComponent implements OnInit {
  public registrationFrom!: FormGroup;

  get favouriteHexCodeValue(): string {
    return this.registrationFrom?.get('favouriteHexCode')?.value;
  }

  constructor() {}

  ngOnInit(): void {
    this.generateRegistrationForm();
  }

  public generateRegistrationForm(): void {
    this.registrationFrom = new FormGroup({
      name: new FormControl('Deepak', {
        validators: [Validators.required, UniversalValidators.noEmptyString],
      }),
      email: new FormControl('deepak@gmail.com', {
        validators: [Validators.required, EmailValidators.normal],
      }),
      password: new FormControl('text2@123', {
        validators: [Validators.required, UniversalValidators.noWhitespace],
      }),
      favouriteHexCode: new FormControl('#fff'),
    });
  }

  public submitRegistrationForm(): void {
    if (this.registrationFrom.valid) {
      const registrationRequest: RegistrationRequestModel = {
        ...this.registrationFrom.value,
      };

      // Success
      console.log({ registrationRequest });
    }
  }
}
