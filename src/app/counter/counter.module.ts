import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CounterComponent } from './component/counter/counter.componet';

@NgModule({
  declarations: [CounterComponent],
  exports: [CounterComponent],
  imports: [CommonModule],
})
export class CounterModule {}
