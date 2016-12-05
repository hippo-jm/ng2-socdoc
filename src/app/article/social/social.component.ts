import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'article-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.scss', '../../../assets/sass/style.sass']
})
export class SocialComponent implements OnInit {

  @Input() data:any;
  constructor() { }

  ngOnInit() {
  }

}
