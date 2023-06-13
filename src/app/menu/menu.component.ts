import { Component, Input, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  @Input()
  isLogged: boolean = false;
  @Input()
  isAdmin: boolean = false;
  @Input()
  username: string = '';
  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
  }

  public login(){
    this.loginService.login();
  }
  public logout(){
    this.loginService.logout();
  }
}
