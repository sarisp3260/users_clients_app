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

  selectedUser: User | null = null;
  displayDialog: boolean = false;

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
    if (this.dt) {
      this.dt.filter(value, field, matchMode);
    }
  }

  showUserDetails(user: User) {
    this.selectedUser = { ...user };
    console.log(this.selectedUser);
    this.displayDialog = true;
  }

  hideDialog() {
      // Cierra el modal y limpia el usuario seleccionado
      this.displayDialog = false;
      this.selectedUser = null;
  }
  
}