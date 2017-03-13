import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { CourseRoutesModule } from './course.router';

import { CourseAddComponent } from './course-add.component';
import { CourseModifyComponent } from './course-modify.component';
import { CourseListAdminComponent } from './course-list-admin.component';
import { CourseListStudentComponent } from './course-list-student.component';


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
    ],
    exports: [
        CourseAddComponent,
        CourseModifyComponent,
        CourseListAdminComponent,
        CourseListStudentComponent,
    ],
})

export class CourseModule { }