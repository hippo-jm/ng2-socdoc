import {Component, Inject} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', '../assets/sass/style.sass']
})
export class AppComponent {
  title = 'ap dd p kkk!';

  onUpdate(id, text){
    console.log('onUpdate ::: ' + text)
    this.mail.update(id, text)
  }

  constructor(@Inject('mail') private mail, @Inject('api') private api){

  }
}
