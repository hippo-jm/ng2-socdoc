import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'article-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss', '../../../assets/sass/style.sass']
})
export class HeaderComponent implements OnInit {

  @Input() data:any;
  constructor() { }

  ngOnInit() {
  }

}
