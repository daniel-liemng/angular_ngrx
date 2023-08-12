import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CounterComponent } from './counter.component';
import { CounterOutputComponent } from 'src/app/components/counter/counter-output/counter-output.component';
import { CounterButtonsComponent } from 'src/app/components/counter/counter-buttons/counter-buttons.component';
import { CounterInputComponent } from 'src/app/components/counter/counter-input/counter-input.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [{ path: '', component: CounterComponent }];

@NgModule({
  declarations: [
    CounterOutputComponent,
    CounterButtonsComponent,
    CounterComponent,
    CounterInputComponent,
  ],
  imports: [CommonModule, FormsModule, RouterModule.forChild(routes)],
})
export class CounterModule {}
