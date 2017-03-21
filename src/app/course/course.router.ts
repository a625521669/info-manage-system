import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from '../auth-guard.service';

import { CourseListAdminComponent } from './course-list-admin.component';
import { CourseListStudentComponent } from './course-list-student.component';
import { CourseAddComponent } from './course-add.component';
import { CourseModifyComponent } from './course-modify.component';

import { ChooseListAdminComponent } from './choose-list-admin.component';
import { ChooseListStudentComponent } from './choose-list-student.component';

import { ExamModifyComponent } from './exam-modify.component';

import { ScoreInputComponent } from './score-input.component';

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
    },
    {
        path: 'choose-list/admin',
        component: ChooseListAdminComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'choose-list/student',
        component: ChooseListStudentComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'exam-modify/:id',
        component: ExamModifyComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'score-input',
        component: ScoreInputComponent,
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

export class CourseRoutesModule { }