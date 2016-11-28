import {Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation} from '@angular/core';

@Component({
  encapsulation:ViewEncapsulation.Native,
  selector: 'app-simple-form',
  template: `
    <p>
      simple-form Works!{{message}}
      <input  #myInput type="text" [(ngModel)]="message" [ngClass]="{mousedown: isMouseDown}" (mousedown)="isMouseDown = true" (mouseup)="isMouseDown = false" >
    
    <button (click)="update.emit({text:message})">Click me!</button>
    <button (mouseover)="onOver($event, myInput.value)">Click me!</button>
    </p>    
  `,
  styles: [':host{display:flex;flex-direction: column} .mousedown{border:2px solid green}']
})
export class SimpleFormComponent implements OnInit {

  @Input() message;

  @Output() update = new EventEmitter();

  /*onClick(value){
    console.log(value);
  }*/

  onOver(e, v){
    console.log(e, v)
  }

  constructor() {
    /*setInterval(()=> this.message = Math.random().toString(), 1000)*/
  }

  ngOnInit() {
  }

}
