import { Injectable } from '@angular/core';
import{ LocalStorageService }from 'ngx-webstorage';

@Injectable({
  providedIn: 'root'
})
export class ToService {

  constructor(
    private LocalStorage:LocalStorageService
  )
   { }
   Add(value){
     let tasks=JSON.parse(this.LocalStorage.retrieve('tasks'))===null ? []:JSON.parse(this.LocalStorage.retrieve('tasks'));
     tasks.push(value);
     this.LocalStorage.store('tasks',JSON.stringify(tasks));
    
   }
   get(){
     return JSON.parse(this.LocalStorage.retrieve('tasks'));
   }
   remove(i){
     let tasks:any[]=JSON.parse(this.LocalStorage.retrieve('tasks'));
     tasks.splice(i,1);
     this.LocalStorage.store('tasks',JSON.stringify(tasks));
   }
}
