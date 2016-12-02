import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SimpleFormComponent } from './simple-form/simple-form.component';
import {MailService} from "./mail.service";
import { ArticleComponent } from './article/article.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { DownloadComponent } from './download/download.component';

import { RouterModule, Routes, Router, RouterState } from '@angular/router';
import * as routeall from '@angular/router';
import { SocdocArticleRoutes } from './routes/article.routes';

import { AlertModule } from 'ng2-bootstrap/ng2-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    SimpleFormComponent,
    ArticleComponent,
    ArticleListComponent,
    DownloadComponent
  ],
  imports: [
    AlertModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(SocdocArticleRoutes)
  ],
  providers: [
    {provide:'mail', useClass: MailService},
    {provide:'api', useValue: 'http:localhost:3000'},
    {provide:'c_route', useValue:routeall},
    {provide:'c_route1', useValue:RouterState}
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
