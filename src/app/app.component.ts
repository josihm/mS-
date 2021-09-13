import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'mS';
  constructor(private router: Router){}
  ngOnInit(){
    if(localStorage.getItem("isLogged")=="false" 
        || localStorage.getItem("isLogged") == null
        || localStorage.getItem("isLogged") == ''
        || localStorage.getItem("isLogged") == undefined){
      localStorage.setItem("isLogged", "false");
      this.router.navigate(['login']);
    }else{
      localStorage.setItem("isLogged", "true");
      this.router.navigate(['home']);
    }
  }
}
