/**
 * Usage
 *
 *
 * import {Directive, ElementRef, Renderer} from "@angular/core";
 *
 * @Directive({
 *   seletor: '[my-directive]'
 *   seletor: '[my-directive]'
 * })
 * export class MyDirective {
 *     constructor(el: ElementRef, renderer: Renderer) {
 *     renderer.setElementClass(el.nativeElement, 'my-new-class', true);
 *   }
 * }
 */

import {Directive, HostBinding, ElementRef, Renderer, Input, OnInit} from "@angular/core";

@Directive({
  selector: '[backImg]'
})
export class BackimgDirective implements OnInit{


  @Input("backImg") url:any;

  // @HostBinding('style.background-size');
  // @HostBinding('style.background-position');
  // @HostBinding('style.background-repeat');
  //
  // backgroundSize:string = 'cover';
  // backgroundPosition:string = 'center';
  // backgroundRepeat:string = 'no-repeat';

  // @HostBinding('attr.role') role = 'admin';
  // @HostListener('click') onClick() {
  //   this.role=this.role=='admin'?'guest':'admin';
  // }


  constructor(private el: ElementRef, private renderer: Renderer) {  }




  ngOnInit() {
    //'background-image': 'linear-gradient(to bottom, rgba(0,0,0,0.5) 0%,rgba(0,0,0,0.5) 100%), url(' + url +')',

    this.renderer.setElementStyle(this.el.nativeElement, 'backgroundSize', 'cover');
    this.renderer.setElementStyle(this.el.nativeElement, 'backgroundImage', 'url('+this.url+')');
    this.renderer.setElementStyle(this.el.nativeElement, 'backgroundPosition', 'center');
    this.renderer.setElementStyle(this.el.nativeElement, 'backgroundRepeat', 'no-repeat');

  }

}