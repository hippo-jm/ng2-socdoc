import {Component, Inject} from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';

import { ArticleService } from './service/aritcle.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', '../assets/sass/style.sass']
})
export class AppComponent {
  title = 'ap dd p kkk!';

  onUpdate(id, text){
    console.log('onUpdate ::: ' + text)
    this.mail.update(id, text)
  }

  c_page(page){
      return this._router.url === page
  }

  constructor(@Inject('mail') private mail, @Inject('api') private api, @Inject('c_route') private c_route, @Inject('c_route1') private c_route1, private _router: Router){
      console.log('hihihi')
      console.log('hihihi')
      console.log('hihihi')

      console.log(this._router.url)

      console.log(c_route)
      console.log(c_route1)

      //console.log(c_route.Router.isActive)

  }
}
