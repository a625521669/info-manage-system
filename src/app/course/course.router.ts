import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from '../auth-guard.service';

import { CourseListAdminComponent } from './course-list-admin.component';
import { CourseListStudentComponent } from './course-list-student.component';
import { CourseAddComponent } from './course-add.component';
import { CourseModifyComponent } from './course-modify.component';



const routerConfig: Routes = [
    {
        path: 'course-list/admin',
        component: CourseListAdminComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'course-list/student',
        component: CourseListStudentComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'course-add',
        component: CourseAddComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'course-modify/:id',
        component: CourseModifyComponent,
        canActivate: [AuthGuard]
    }
]


@NgModule({
    imports: [
        RouterModule.forChild(routerConfig)
    ],
    exports: [
        RouterModule
    ]
})

export class CourseRoutesModule { }