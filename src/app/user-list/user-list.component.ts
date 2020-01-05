import { Component, OnInit } from '@angular/core';
import { UserModel } from './user.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  userList : UserModel[];
  constructor() { 
      this.userList = [new UserModel("user1.1","Vansika Gupta"),
                       new UserModel("user2.2","UserXYZ"),
                       new UserModel("user3.3","UserName user"),
                       new UserModel("user4.4","Testuser"),
                       new UserModel("user5.5","Mr. Test User")];
  }

  ngOnInit() {
  }

}
