import { Component, OnInit, Injectable } from '@angular/core';
import { Http, Headers, URLSearchParams, RequestOptions, Request, RequestMethod,ResponseOptions, Response} from '@angular/http';
import { ArticleService } from '../service/aritcle.service';
import { DetectService } from '../service/detect.service';
import {Article} from './article'

//
// @Injectable()
// class ArticleApi {
//   constructor(private http: Http) {}
//
//   getPeople(): Observable<Article[]> {
//     return this.http.get('https://api.goodoc.kr/bot/250120:2016-11-02T07:49:13.020454')
//         .map(this.extractData)
//         .catch(this.handleError);
//   }
//
//   private extractData(res: Response) {
//     console.log("??21")
//     let body = res.json();
//     console.log("??")
//     console.log(body)
//     return body.data || { };
//   }
//
//   private handleError (error: Response | any) {
//     // In a real world app, we might use a remote logging infrastructure
//     let errMsg: string;
//     if (error instanceof Response) {
//       const body = error.json() || '';
//       const err = body.error || JSON.stringify(body);
//       errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
//     } else {
//       errMsg = error.message ? error.message : error.toString();
//     }
//     console.error(errMsg);
//     return Observable.throw(errMsg);
//   }
//   /*getHeroes (): Observable<Hero[]> {
//     return this.http.get(this.heroesUrl)
//         .map(this.extractData)
//         .catch(this.handleError);
//   }*/
//
//   /*seachArticle(query) {
//     const endpoint = 'http://api.nytimes.com/svc/search/v2/articlesearch.json';
//     const searchParams = new URLSearchParams()
//     searchParams.set('api-key', API_KEY);
//     searchParams.set('q', query);
//
//     return this.http
//         .get(endpoint, {search: searchParams})
//         .map(res => res.json().response.docs);
//   }
//
//   postExample(someData) {
//     const endpoint = 'https://your-endpoint';
//     const headers = new Headers({'Content-Type': 'application/json'});
//
//     return this.http
//         .post(endpoint, JSON.stringify(someData), { headers: headers })
//         .map(res => res.json());
//   }*/
// }

@Component({
  selector: 'app-article',
  templateUrl:'./article.component.html',
  // template: `
  //   <p>
  //     {{data.code}}
  //   </p>
  // `,
  providers:[ArticleService, DetectService],
  styleUrls: ['./article.component.css', '../../assets/sass/style.sass']
})
export class ArticleComponent implements OnInit {
  //result1:Array<Object

  private articles:Article[];

  //private articles:Object<{}>;
  //private data:Article[];
  //data:Article[];
  data = {}
  isMobile = false;
  isArticle = false;
  private test;

  kkk = "hihikk";

  constructor(private _articleService:ArticleService, private _detectService:DetectService) {



    // var options = new RequestOptions({
    //   method: RequestMethod.Post
    // });
    // var req = new Request(options.merge({
    //   url: 'https://api.goodoc.kr/bot/250120:2016-11-02T07:49:13.020454'
    // }));
    // console.log('req.method:', RequestMethod[req.method]); // Post
    // console.log('options.url:', options.url); // null
    // console.log('req.url:', req.url); // https://google.com

    // var options = new ResponseOptions({
    //   //body: {name: 'Jeff'}
    //   url: 'https://api.goodoc.kr/bot/250120:2016-11-02T07:49:13.020454'
    // });
    // var res = new Response(options.merge({
    //
    // }));
    // console.log('options.url:', options.url); // null
    // console.log('res.json():', res.json()); // Object {name: "Jeff"}
    // console.log('res.url:', res.url); // https://google.com

    //
    // console.log(kkk)
    // console.log(RequestOptions)
    // console.log(Request)
    // console.log(RequestMethod)
  }

  getArticle(){
    //return this.articles;
  }

  init():void{
    console.log('hihi')
    console.log('hihi')
    console.log('hihi')
    console.log(this.articles)


    //decodeURIComponent(window.atob(tmp));
    //decodeURIComponent(escape(window.atob( str )));

    // tmp
    this.articles.data.article.body = decodeURIComponent(escape(window.atob(this.articles.data.article.body)))
    this.articles.data.replies.forEach(function(o, i){

      o.body = decodeURIComponent(escape(window.atob(o.body)))
    })
    //JSON.parse(buffer.toString("utf-8"))

    this.isArticle = true;
  }



  ngOnInit() {

    console.log("asdf")
    console.log(this._detectService.isMobile());
    console.log(this._detectService.isMobilePlatform());

    this.test = "우오";


    //this.articles = this._articleService.getPosts();
    this._articleService.getPosts()
        .subscribe(articles => {

          this.articles = articles; // {data:{}, status:{}}

          this.data = this.articles.data;
          console.log(this.data)
          console.log(this.data.article.user)

          this.init();

        },
        error => console.error('Error: ' + error),
        () => console.log('Complete!!!')
    );

  }

}
