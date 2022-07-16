import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input.component';
import { InputErrorModule } from '../input-error/input-error.module';

@NgModule({
  declarations: [InputComponent],
  imports: [CommonModule, InputErrorModule],
  exports: [InputComponent],
})
export class InputModule {}
