import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { userRoutesModule } from './user.router';

import { UserAddComponent } from './user-add.component';
import { UserModifyComponent } from './user-modify.component';
import { UserListComponent } from './user-list.component';
import { UserInfoListComponent } from './user-info-list.component';


@NgModule({
  imports: [
    CommonModule,
    userRoutesModule,
    FormsModule
  ],
  declarations: [
    UserAddComponent,
    UserListComponent,
    UserInfoListComponent,
    UserModifyComponent
  ],
  exports: [
    UserAddComponent,
    UserListComponent,
    UserInfoListComponent,
    UserModifyComponent
  ],
})

export class UserModule { }