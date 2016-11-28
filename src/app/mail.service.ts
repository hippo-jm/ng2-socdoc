import { Injectable } from '@angular/core';

@Injectable()
export class MailService {

  messages = [
    {'id':0, 'text':'jj'},
    {'id':1, 'text':'dd'},
    {'id':2, 'text':'dasdf'}
  ];

  update(id, text){
    console.log(text)
    this.messages = this.messages.map(
      m=>
        m.id === id ? {id, text} : m)
  }
  constructor() { }

}
