import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/Rx';
import {Article} from '../article/article'

@Injectable()
export class ArticleService {
  private articles;
  private url='https://api.goodoc.kr/bot/250120:2016-11-02T07:49:13.020454';

  constructor(private _http: Http) { }

  getPosts(): Observable<Article[]>{
    return this._http.get(this.url)
        .map(res => res.json());
  };

  addPosts(){

  }

}
