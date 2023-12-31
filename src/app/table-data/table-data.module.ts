import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';

import { TableDataComponent } from './table-data.component';


@NgModule({
  declarations: [
    TableDataComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    DialogModule,
    TableModule
  ],
  exports: [
    TableDataComponent
  ]
})
export class TableDataModule { }
