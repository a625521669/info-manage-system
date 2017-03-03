import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { RouterConfig } from './user.router';

import { UserAddComponent } from './user-add.component';
import { UserListComponent } from './user-list.component';
import { UserInfoListComponent } from './user-info-list.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(RouterConfig)
  ],
  declarations: [
    UserAddComponent,
    UserListComponent,
    UserInfoListComponent
  ],
  exports: [
    UserAddComponent,
    UserListComponent,
    UserInfoListComponent
  ],
})

export class UserModule { }