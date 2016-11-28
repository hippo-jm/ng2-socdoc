import {Component, Inject} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
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
