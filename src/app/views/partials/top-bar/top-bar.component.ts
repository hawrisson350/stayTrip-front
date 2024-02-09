import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { User } from '@data/schema/user.model';
import { CurrentUserService } from '@data/service/CurrentUser.service';

@Component({
  selector: 'st-top-bar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.scss'
})
export class TopBarComponent {
  userInfo: User | null = null;

  constructor(
    public userService: CurrentUserService,
    private router: Router
  ) {
    userService.user.subscribe(user => {
      this.userInfo = user;
    });
  }

  logOut(){
    this.userService.LogOut();
    this.router.navigate(["/home"]); 
  }

}
