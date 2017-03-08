import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from '../auth-guard.service';

import { NewsListComponent } from './news-list.component';
import { NewsAddComponent } from './news-add.component';
import { NewsModifyComponent } from './news-modify.component';

const routerConfig: Routes = [
    {
        path: 'news-list',
        component: NewsListComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'news-add',
        component: NewsAddComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'news-modify/:id',
        component: NewsModifyComponent,
        canActivate: [AuthGuard]
    },
]


@NgModule({
    imports: [
        RouterModule.forChild(routerConfig)
    ],
    exports: [
        RouterModule
    ]
})

export class OtherRoutesModule { }