import { Component, OnInit, Input } from '@angular/core';
import { UserModel } from '../user-list/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {

  @Input("user") user : UserModel;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  onClick()
  {
      this.router.navigate(['cart',{id:this.user.userId}])
      .then(success => console.log('navigation success?' , success))
      .catch(console.error); 
  }

}
