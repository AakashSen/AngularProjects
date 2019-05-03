import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  p : any;

  ngOnInit() {
    this.p = {
      firstName : 'Aakash',
      lastName: 'Sen'
    }
  }

  //Changing the properties of the same object
  /* changeName() {
    this.p.firstName = 'Suresh'
    this.p.lastName = 'Kumar'
  } */

  //Changing the reference of the object

  changeName() {
    this.p = {
      firstName : 'Suresh',
      lastName : 'Kumar'
    }
  }

}
