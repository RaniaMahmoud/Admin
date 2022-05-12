import { Component, OnInit } from '@angular/core';
import { APIUsersService } from 'src/app/Services/apiusers.service';
import { Admin } from 'src/app/ViewModels/AdminData-view-model';
import { AuthData } from 'src/app/ViewModels/AuthData-view-model';
import { LogIn } from 'src/app/ViewModels/LogIn-view-model';

@Component({
  selector: 'app-all-admin',
  templateUrl: './all-admin.component.html',
  styleUrls: ['./all-admin.component.scss']
})
export class AllAdminComponent implements OnInit {

  admins:LogIn[];
  constructor(private APIUserServise:APIUsersService) {
    this.admins=[];
    this.APIUserServise.AllAdmins().subscribe(admin=>{
      this.admins=admin;
    })
  }

  ngOnInit(): void {
  }

}
