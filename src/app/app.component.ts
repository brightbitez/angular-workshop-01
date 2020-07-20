import { Component } from '@angular/core';

    

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'my-dream-app';
  score = 100;
  show = true;
  firstName = '';
  name = '';
  lastName = '';
  colors = ['Red','Green','Blue'];

  save(firstName,lastName){
    this.name = firstName + " " + lastName;
  }
}
