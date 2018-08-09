import { Component } from '@angular/core';
import{ ToService }from './service/to.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public tasks:any[]=this.to.get()===null ?[]:this.to.get();
  public newTask:String='';
  constructor(
    private to:ToService
  ){}
  
  Add(value){
    this.to.Add(value);
    this.tasks.push(value);
    this .newTask='';
  }
  remove(i){
    this.to.remove(i);
    this.tasks.splice(i,1);
  }
}
