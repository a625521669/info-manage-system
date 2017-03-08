import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { OtherRoutesModule } from './other.router';

import { NewsAddComponent } from './news-add.component';
import { NewsModifyComponent } from './news-modify.component';
import { NewsListComponent } from './news-list.component';

@NgModule({
  imports: [
    CommonModule,
    OtherRoutesModule,
    FormsModule
  ],
  declarations: [
    NewsAddComponent,
    NewsModifyComponent,
    NewsListComponent,
  ],
  exports: [
    NewsAddComponent,
    NewsModifyComponent,
    NewsListComponent,
  ],
})

export class OtherModule { }