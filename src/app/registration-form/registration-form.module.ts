import { InputPasswordModule } from './../shared/input-password/input-password.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistrationFormRoutingModule } from './registration-form-routing.module';
import { RegistrationFormComponent } from './registration-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { InputModule } from '../shared/input/input.module';

@NgModule({
  declarations: [RegistrationFormComponent],
  imports: [
    CommonModule,
    RegistrationFormRoutingModule,
    ReactiveFormsModule,
    InputModule,
    InputPasswordModule,
  ],
  exports: [RegistrationFormComponent],
})
export class RegistrationFormModule {}
