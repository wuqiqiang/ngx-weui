import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonModule } from 'evm-ngx-weui/button';

import { PaginationComponent } from './pagination.component';

@NgModule({
  imports: [CommonModule, ButtonModule],
  declarations: [PaginationComponent],
  exports: [PaginationComponent],
})
export class PaginationModule {}
