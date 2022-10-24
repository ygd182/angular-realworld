import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleListComponent } from './article-list/article-list.component';
import { TagListComponent } from './tag-list/tag-list.component';
import { ArticlePreviewComponent } from './article-preview/article-preview.component';
import { ErrorListComponent } from './error-list/error-list.component';
import { ShowLoggedInDirective } from './directives/show-logged-in.directive';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';

const declarations = [
  ShowLoggedInDirective,
  FooterComponent,
  HeaderComponent,
  ArticlePreviewComponent,
  ArticleListComponent,
  TagListComponent,
  ErrorListComponent,
];

@NgModule({
  declarations: [
    ...declarations,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    ...declarations
  ]
})
export class SharedModule { }
