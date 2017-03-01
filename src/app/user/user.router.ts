import { Routes } from '@angular/router';

import { UserAddComponent } from './user-add.component';
import { UserListComponent } from './user-list.component';

export const RouterConfig: Routes = [
    {
        path: 'user-add',
        component: UserAddComponent
    },
    {
        path: 'user-list',
        component: UserListComponent 
    }
]