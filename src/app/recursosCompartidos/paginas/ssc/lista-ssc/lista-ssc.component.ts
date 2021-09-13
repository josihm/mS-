import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-ssc',
  templateUrl: './lista-ssc.component.html',
  styleUrls: ['./lista-ssc.component.scss']
})
export class ListaSscComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    var logged = String(localStorage.getItem("isLogged")?.toString());
    if (logged=="false"){
      this.router.navigate(['login']);
    }else{}
  }

}
