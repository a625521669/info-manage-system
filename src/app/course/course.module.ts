import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { CourseRoutesModule } from './course.router';

import { CourseAddComponent } from './course-add.component';
import { CourseModifyComponent } from './course-modify.component';
import { CourseListAdminComponent } from './course-list-admin.component';
import { CourseListStudentComponent } from './course-list-student.component';

import { ChooseListAdminComponent } from './choose-list-admin.component';
import { ChooseListStudentComponent } from './choose-list-student.component';

import { ExamModifyComponent } from './exam-modify.component';

import { ScoreInputComponent } from './score-input.component';

import { GradeListComponent } from './grade-list.component';

@NgModule({
    imports: [
        CommonModule,
        CourseRoutesModule,
        FormsModule
    ],
    declarations: [
        CourseAddComponent,
        CourseModifyComponent,
        CourseListAdminComponent,
        CourseListStudentComponent,

        ChooseListAdminComponent,
        ChooseListStudentComponent,

        ExamModifyComponent,

        ScoreInputComponent,

        GradeListComponent
    ],
    exports: [
        CourseAddComponent,
        CourseModifyComponent,
        CourseListAdminComponent,
        CourseListStudentComponent,

        ChooseListAdminComponent,
        ChooseListStudentComponent,

        ExamModifyComponent,

        ScoreInputComponent,

        GradeListComponent
    ],
})

export class CourseModule { }