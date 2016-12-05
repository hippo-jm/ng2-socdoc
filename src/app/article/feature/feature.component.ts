import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'article-feature',
  templateUrl: 'feature.component.html',
  styleUrls: ['feature.component.scss', '../../../assets/sass/style.sass']
})
export class FeatureComponent implements OnInit {

  // hihi
  @Input() data:any;

  constructor() { }

  ngOnInit() {
  }

}
