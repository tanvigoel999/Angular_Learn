import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth-login',
  templateUrl: './auth-login.component.html',
  styleUrls: ['./auth-login.component.css']
})
export class AuthLoginComponent implements OnInit {
  isLoading:boolean=false


  constructor( private router:Router) { }

  ngOnInit(): void {
  }
  login(){
    setTimeout(() => {
      this.router.navigate(['/'])
    }, 2000);
    this.isLoading=true;
  }
}
