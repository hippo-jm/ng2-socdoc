import { RouterModule, Routes } from '@angular/router';
import { ArticleComponent } from '../article/article.component';
import { ArticleListComponent } from '../article-list/article-list.component';
import { DownloadComponent } from '../download/download.component';

export const SocdocArticleRoutes : Routes = [
    { path: '', component: DownloadComponent, name:'Home'},
    { path: 'list', component: ArticleComponent, name:'List'},
    { path: 'article/:id', component: ArticleListComponent, name:'Article'}
];
