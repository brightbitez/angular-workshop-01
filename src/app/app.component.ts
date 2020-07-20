import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

    

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class ProfileEditorComponent {
  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
  });
}
export class AppComponent {
  title = 'my-dream-app';
  score = 100;
  show = true;
  firstName = '';
  name = '';
  lastName = '';
  colors = ['Red','Green','Blue'];


  inputYourName(event: any): void{
    this.firstName = event.target.value;
  }
  inputLastName(input: string): void {
    this.lastName = input;
  }
  clickEvent(){
    this.name = this.firstName + " " + this.lastName;
  }
}
