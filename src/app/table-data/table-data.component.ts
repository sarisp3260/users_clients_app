import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../services/user.service';
import { Table } from 'primeng/table';
import { PrimeIcons } from 'primeng/api';

@Component({
  selector: 'app-table-data',
  templateUrl: './table-data.component.html',
  styleUrls: ['./table-data.component.css']
})
export class TableDataComponent implements OnInit {

  @ViewChild('dt') dt!: Table;

  loading: boolean = false;

  users: User[] = [];

  selectedUser: User | null = null; // Define una variable para el usuario seleccionado
  displayDialog: boolean = false; // Controla la visibilidad del modal

  constructor(private UserService: UserService ) { }

  ngOnInit(): void {
    this.getDataList();
  }

  getDataList() {
    this.loading = true;
    this.UserService.getData().subscribe({
        next: (data: User[]) => {
            this.users = data;
            this.loading = false;
        },
        error: (error) => {
            console.log(error);
            this.loading = false;
        }
    });
  }
  applyFilter($event: any, field: string, matchMode: string) {
    let value = ($event.target as HTMLInputElement)?.value;
    if (this.dt) { // Ensure dt is available before filtering
      this.dt.filter(value, field, matchMode);
    }
  }

  showUserDetails(user: User) {
    // Guarda el usuario seleccionado y abre el modal
    this.selectedUser = { ...user };
    this.displayDialog = true;
  }

  hideDialog() {
      // Cierra el modal y limpia el usuario seleccionado
      this.displayDialog = false;
      this.selectedUser = null;
  }
}