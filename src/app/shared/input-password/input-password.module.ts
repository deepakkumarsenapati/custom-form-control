import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputPasswordComponent } from './input-password.component';
import { InputErrorModule } from '../input-error/input-error.module';

@NgModule({
  declarations: [InputPasswordComponent],
  imports: [CommonModule, InputErrorModule],
  exports: [InputPasswordComponent],
})
export class InputPasswordModule {}
