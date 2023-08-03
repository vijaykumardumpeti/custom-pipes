import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
     userDetails1 = {
      name: "vijaykumar",
      email: "vijaydumpeti70@gmail.com",
      gender: "male"
    }

    userDetails2 = {
      name: "saisruthi",
      email: "sruti70@gmail.com",
      gender: "female"
    }

    greetings = "good morning"
}
