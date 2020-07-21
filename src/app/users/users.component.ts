import { Component, OnInit } from '@angular/core';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';      
import { FormArray } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  todo = {name:'zzz'};
  todoForm: FormGroup;
  ngOnInit(): void {
    this.todoForm = new FormGroup({
      'name': new FormControl(this.todo.name, [
        Validators.required,
        Validators.minLength(4)])
    });
  }
  title = 'my-dream-app';
  score = 100;
  show = true;
  myStyle ='';
  colors = ['Red','Green','Blue'];
  lists = [];
  doneLists = [];
  save(toDo){
    console.log(toDo);
    if(toDo.trim() !== '')
    {this.lists.push(toDo);}
  }
  updateLists(done){
    if(this.doneLists.indexOf(done) !== -1){
    this.doneLists.splice(this.doneLists.indexOf(done),1);
    this.myStyle = "none";}
    else{
      this.doneLists.push(done);
      this.myStyle = "line-through";
    }
    }
    get name() { return this.todoForm.get('todo'); }
}
