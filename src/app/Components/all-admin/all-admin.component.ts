import { Component, OnInit } from '@angular/core';
import { APIUsersService } from 'src/app/Services/apiusers.service';
import { Admin } from 'src/app/ViewModels/AdminData-view-model';
import { AdminViewModelAPI } from 'src/app/ViewModels/AdminViewModelAPI';
import { AuthData } from 'src/app/ViewModels/AuthData-view-model';
import { LogIn } from 'src/app/ViewModels/LogIn-view-model';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
@Component({
  selector: 'app-all-admin',
  templateUrl: './all-admin.component.html',
  styleUrls: ['./all-admin.component.scss']
})
export class AllAdminComponent implements OnInit {
  displayedColumns = ['Name', 'Password'];
  admins:AdminViewModelAPI[];
  constructor(private APIUserServise:APIUsersService, private matDialog: MatDialog) {
    this.admins=[];
    this.APIUserServise.AllAdmins().subscribe(admin=>{
      this.admins=admin;
      console.log(this.admins)
    })
    //console.log(this.admins);
  }

  ngOnInit(): void {
  }

}
