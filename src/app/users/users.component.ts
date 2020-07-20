import { Component, OnInit } from '@angular/core';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';

@Component({
  selector: 'app-root',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {

  title = 'my-dream-app';
  score = 100;
  show = true;
  name = '';
  colors = ['Red','Green','Blue'];
  lists = [];
  doneLists = [];
  save(toDo){
    if(toDo.trim() !== '')
    {this.lists.push(toDo);}
  }
  updateLists(done){
    if(this.doneLists.indexOf(done) !== -1){
    this.doneLists.splice(this.doneLists.indexOf(done),1);}
  
    else{
      this.doneLists.push(done);}
    }
  
}