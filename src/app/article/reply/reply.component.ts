import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'article-reply',
  templateUrl: 'reply.component.html',
  styleUrls: ['reply.component.scss','../../../assets/sass/style.sass']
})
export class ReplyComponent implements OnInit {

  @Input('data') data:any;
  @Input('isArticle') isArticle:any;

  constructor() { }

  ngOnInit() {
  }

}
