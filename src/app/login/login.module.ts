import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LoginRoutesModule } from './login.router';

import { LoginComponent } from './login.component';

@NgModule({
    imports: [
        CommonModule,
        LoginRoutesModule
    ],
    declarations: [
        LoginComponent
    ],
    exports: [
        LoginComponent
    ],
})

export class LoginModule { }