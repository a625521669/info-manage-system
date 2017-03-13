import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { OtherRoutesModule } from './other.router';

import { NewsAddComponent } from './news-add.component';
import { NewsModifyComponent } from './news-modify.component';
import { NewsListComponent } from './news-list.component';
import { NewsListAdminComponent } from './news-list-admin.component';

import { ReviewAddComponent } from './review-add.component';
import { ReviewListComponent } from './review-list.component';
import { ReviewListAdminComponent } from './review-list-admin.component';

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
        NewsListAdminComponent,

        ReviewAddComponent,
        ReviewListComponent,
        ReviewListAdminComponent
    ],
    exports: [
        NewsAddComponent,
        NewsModifyComponent,
        NewsListComponent,
        NewsListAdminComponent,

        ReviewAddComponent,
        ReviewListComponent,
        ReviewListAdminComponent
    ],
})

export class OtherModule { }