import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';

import { TableDataComponent } from './table-data.component';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';


@NgModule({
  declarations: [
    TableDataComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    DialogModule,
    TableModule,
    AvatarModule,
    AvatarGroupModule
  ],
  exports: [
    TableDataComponent
  ]
})
export class TableDataModule { }
