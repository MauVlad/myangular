import { NgModule } from '@angular/core';
import { 
        MatCardModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatInputModule,
        MatToolbarModule,
        MatIconModule,
        MatCheckboxModule,
        MatListModule,
       } from '@angular/material';
import { MatChipsModule } from '@angular/material/chips';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PagesRouterModule } from './pages.routes';
import { ShoppingCarComponent } from './pos/shoppingcar/shoppingcar.component';
import { CarComponent } from './pos/car/car.component';

import { CoreModule } from '../core/core.module';
import {MatSliderModule, MatDialogModule } from '@angular/material';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { ProductsComponent } from './pos/products/products.component';
import { NewProductComponent } from './pos/products/new-product/new-product.component';
import { EditProductComponent } from './pos/products/edit-product/edit-product.component';
import { AvatarDialogComponent } from './pos/products/avatar-dialog/avatar-dialog.component';
import { EditProductResolver } from './pos/products/edit-product/edit-product.resolver';

import { TeachersComponent } from './trainning/teachers/teachers.component';
import { NewTeacherComponent } from './trainning/teachers/new-teacher/new-teacher.component';
import { EditTeacherComponent } from './trainning/teachers/edit-teacher/edit-teacher.component';
import { EditTeacherResolver } from  './trainning/teachers/edit-teacher/edit-teacher.resolver';


import { StudentsComponent } from './trainning/students/students.component';

import { CoursesComponent } from './trainning/courses/courses.component';
import { ClassroomComponent } from './trainning/classroom/classroom.component';


import { AvatarTeacherComponent } from './trainning/teachers/avatar-teacher/avatar-teacher.component';
import { EnrollStudentComponent } from './trainning/students/enroll-student/enroll-student.component';
import { NewCourseComponent } from './trainning/courses/new-course/new-course.component';
import { EditCourseComponent } from './trainning/courses/edit-course/edit-course.component';

import { AvatarCourseComponent } from './trainning/courses/avatar-course/avatar-course.component';
import { ListCoursesComponent } from './trainning/students/list-courses/list-courses.component';
import { ProjectsComponent } from './projectmanager/projects/projects.component';
import { NewProjectComponent } from './projectmanager/new-project/new-project.component';
import { EditProjectComponent } from './projectmanager/edit-project/edit-project.component';
import { AvatarProjectComponent } from './projectmanager/avatar-project/avatar-project.component';
import { AddTaskComponent } from './projectmanager/edit-project/add-task/add-task.component';
import { EditTaskComponent } from './projectmanager/edit-project/edit-task/edit-task.component';
import { ListTaskComponent } from './projectmanager/edit-project/list-task/list-task.component';
import { UploadAssetComponent } from './projectmanager/edit-project/edit-task/upload-asset/upload-asset.component';
import { ProjectTeamComponent } from './projectmanager/project-team/project-team.component';
import { AddMemberComponent } from './projectmanager/project-team/add-member/add-member.component';
import { EditMemberComponent } from './projectmanager/project-team/edit-member/edit-member.component';
import { AvatarMemberComponent } from './projectmanager/project-team/avatar-member/avatar-member.component';
import { AddLessonComponent } from './trainning/courses/edit-course/add-lesson/add-lesson.component';
import { EditLessonComponent } from './trainning/courses/edit-course/edit-lesson/edit-lesson.component';
import { AvatarLessonComponent } from './trainning/courses/edit-course/avatar-lesson/avatar-lesson.component';
import { AvatarConceptComponent } from './trainning/courses/edit-course/edit-lesson/avatar-concept/avatar-concept.component';
import { AddConceptComponent } from './trainning/courses/edit-course/edit-lesson/add-concept/add-concept.component';
import { EditConceptComponent } from './trainning/courses/edit-course/edit-lesson/edit-concept/edit-concept.component';
import { UploadResourceComponent } from './trainning/courses/edit-course/edit-lesson/edit-concept/upload-resource/upload-resource.component';
import { NewStudentComponent } from './trainning/students/new-student/new-student.component';
import { EditStudentComponent } from './trainning/students/edit-student/edit-student.component';
import { AvatarStudentComponent } from './trainning/students/avatar-student/avatar-student.component';
import { ProjectReportsComponent } from './projectmanager/project-reports/project-reports.component';

@NgModule({
    imports: [
        ReactiveFormsModule, FormsModule,
        MatCardModule,
        CommonModule,
        FlexLayoutModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatInputModule,
        MatToolbarModule,
        MatIconModule,
        MatCheckboxModule,
        MatListModule,
        MatChipsModule,
        MatSliderModule, MatDialogModule,
        CoreModule,
        PagesRouterModule ],
    declarations: [   
        ShoppingCarComponent,
        CarComponent,
        ProductsComponent,

        NewProductComponent,
        EditProductComponent,
        AvatarDialogComponent,
        TeachersComponent,
        StudentsComponent,
        CoursesComponent,
        ClassroomComponent,
        NewTeacherComponent,
        EditTeacherComponent,
        AvatarTeacherComponent,
        EnrollStudentComponent,
        NewCourseComponent,
        EditCourseComponent,
        AvatarCourseComponent,
        ListCoursesComponent,
        ProjectsComponent,
        NewProjectComponent,
        EditProjectComponent,
        AvatarProjectComponent,
        AddTaskComponent,
        EditTaskComponent,
        ListTaskComponent,
        UploadAssetComponent,
        ProjectTeamComponent,
        AddMemberComponent,
        EditMemberComponent,
        AvatarMemberComponent,
        AddLessonComponent,
        EditLessonComponent,
        AvatarLessonComponent,
        AvatarConceptComponent,
        AddConceptComponent,
        EditConceptComponent,
        UploadResourceComponent,
        NewStudentComponent,
        EditStudentComponent,
        AvatarStudentComponent,
        ProjectReportsComponent
    ],
    exports: [
    ],
    entryComponents: [AvatarDialogComponent],
    providers: [EditProductResolver, EditTeacherResolver
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ]
})
export class PagesModule {
}
