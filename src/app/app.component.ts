import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'stackLite';
  questions = ['one' , 'two' , 'three'];


  search(){
    console.log("Search on its way")
  }
  
}
