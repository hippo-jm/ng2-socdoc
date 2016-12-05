import { Component, OnInit, Input} from '@angular/core';


@Component({
  selector: 'hot-article',
  //template:"<div>kkkkkkkkkkkkkkkkkkkkkk</div>",
  templateUrl: 'hot.component.html',
  styleUrls: ['hot.component.scss', '../../../assets/sass/style.sass']
})
export class HotArticleComponent implements OnInit {

  @Input() data:any;
  constructor() { }

  ngOnInit() {
  }

}
