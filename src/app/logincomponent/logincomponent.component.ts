import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logincomponent',
  templateUrl: './logincomponent.component.html',
  styleUrls: ['./logincomponent.component.css']
})
export class LogincomponentComponent implements OnInit {

  constructor(private router: Router) { }


  username: string;
  password: string;

  ngOnInit() {
  }

  login(): void {
    if (this.username == 'admin' && this.password == 'admin') {
      this.router.navigate(["admin"]);
    }else if (this.username == 'user' && this.password == 'user') {
      this.router.navigate(["user"]);
    } else {
      alert("Invalid credentials");
    }
  }

}
