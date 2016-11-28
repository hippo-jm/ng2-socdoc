import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article',
  template: `
    <p>
      article Works!
    </p>
  `,
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
