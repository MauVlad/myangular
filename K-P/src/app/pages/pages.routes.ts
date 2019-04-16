import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarComponent } from './pos/car/car.component';
import { ShoppingCarComponent } from './pos/shoppingcar/shoppingcar.component';
import { ClientsComponent } from './pos/clients/clients.component';


import { ProductsComponent } from './pos/products/products.component';
import { NewProductComponent } from './pos/products/new-product/new-product.component';
import { EditProductComponent } from './pos/products/edit-product/edit-product.component';
import { EditProductResolver } from './pos/products/edit-product/edit-product.resolver';

/*
Trainning Module
*/

import { ClassroomComponent } from './trainning/classroom/classroom.component';

import { TeachersComponent } from './trainning/teachers/teachers.component';
import { NewTeacherComponent } from './trainning/teachers/new-teacher/new-teacher.component';
import { EditTeacherComponent } from './trainning/teachers/edit-teacher/edit-teacher.component';
import { EditTeacherResolver } from './trainning/teachers/edit-teacher/edit-teacher.resolver';


import { StudentsComponent } from './trainning/students/students.component';
import { EnrollStudentComponent } from './trainning/students/enroll-student/enroll-student.component';
import { ListCoursesComponent } from './trainning/students/list-courses/list-courses.component';
import { NewStudentComponent } from './trainning/students/new-student/new-student.component';
import { EditStudentComponent } from './trainning/students/edit-student/edit-student.component';
import { EditStudentResolver } from './trainning/students/edit-student/edit-student.resolver';

import { CoursesComponent } from './trainning/courses/courses.component';
import { NewCourseComponent } from './trainning/courses/new-course/new-course.component';
import { EditCourseComponent } from './trainning/courses/edit-course/edit-course.component';
import { EditCourseResolver } from './trainning/courses/edit-course/edit-course.resolver';

import { AddLessonComponent } from './trainning/courses/edit-course/add-lesson/add-lesson.component';
import { EditLessonComponent } from './trainning/courses/edit-course/edit-lesson/edit-lesson.component';

import { AddConceptComponent } from './trainning/courses/edit-course/edit-lesson/add-concept/add-concept.component';
import { EditConceptComponent } from './trainning/courses/edit-course/edit-lesson/edit-concept/edit-concept.component';
import { UploadResourceComponent } from './trainning/courses/edit-course/edit-lesson/edit-concept/upload-resource/upload-resource.component';


/*
ProjectManager Module
*/

import { ProjectsComponent } from './projectmanager/projects/projects.component';
import { NewProjectComponent } from './projectmanager/new-project/new-project.component';
import { EditProjectComponent } from './projectmanager/edit-project/edit-project.component';
import { EditProjectResolver } from './projectmanager/edit-project/edit-project.resolver';

import { AddTaskComponent } from './projectmanager/edit-project/add-task/add-task.component';
import { EditTaskComponent } from './projectmanager/edit-project/edit-task/edit-task.component';
import { EditTaskResolver } from './projectmanager/edit-project/edit-task/edit-task.resolver';

import { ListTaskComponent } from './projectmanager/edit-project/list-task/list-task.component';
import { UploadAssetComponent } from './projectmanager/edit-project/edit-task/upload-asset/upload-asset.component';

import { ProjectTeamComponent } from './projectmanager/project-team/project-team.component';
import { AddMemberComponent } from './projectmanager/project-team/add-member/add-member.component';
import { EditMemberComponent } from './projectmanager/project-team/edit-member/edit-member.component';
import { EditMemberResolver } from './projectmanager/project-team/edit-member/edit-member.resolver';

import { ProjectReportsComponent } from './projectmanager/project-reports/project-reports.component';

/*
timelog
*/
import { EmployeesComponent } from './timelog/employees/employees.component';
import { NewEmployeesComponent } from './timelog/employees/new-employees/new-employees.component';
import { EditEmployeesComponent } from './timelog/employees/edit-employees/edit-employees.component';
import { EditEmployeesResolver } from './timelog/employees/edit-employees/edit-employees.resolver';

import { DepartmentsComponent } from './timelog/departments/departments.component';
import { SchedulesComponent } from './timelog/schedules/schedules.component';
import { TimelogReportsComponent } from './timelog/timelog-reports/timelog-reports.component';
 

const pagesRoutes: Routes = [
  	{ path: 'shoppingcar', component: ShoppingCarComponent ,data: { animation: 'shoppingcar' } },
  	{ path: 'car', component: CarComponent ,data: { animation: 'car' }},
  	{ path: 'clients', component: ClientsComponent ,data: { animation: 'clients' }},
    { path: 'products', component: ProductsComponent, data: { animation: 'products' }},
    { path: 'products/newproduct', component: NewProductComponent, data: { animation: 'products' }},
    { path: 'products/editproduct/:id', component: EditProductComponent, resolve:{data : EditProductResolver} },

    { path: 'classroom', component: ClassroomComponent, data: { animation: 'classroom' }},

    { path: 'teachers', component: TeachersComponent, data: { animation: 'teachers' }},
    { path: 'teachers/newteacher', component: NewTeacherComponent, data: { animation: 'teachers' }},
    { path: 'teachers/editteacher/:id', component: EditProductComponent, resolve:{data : EditTeacherResolver} },

    { path: 'students', component: StudentsComponent, data: { animation: 'students' }},
    { path: 'students/newstudent', component: NewStudentComponent, data: { animation: 'students' }},
    { path: 'students/editstudent/:id', component: EditStudentComponent, resolve:{data : EditStudentResolver} },
  
    { path: 'courses', component: CoursesComponent, data: { animation: 'courses' }},
   

    { path: 'projects', component: ProjectsComponent, data: { animation: 'projects' }},
    { path: 'projects/newproject', component: NewProjectComponent, data: { animation: 'projects' }},
    { path: 'projects/editproject/:id', component: EditProjectComponent, resolve:{data : EditProjectResolver} },

    { path: 'tasks', component: ListTaskComponent, data: { animation: 'tasks' }},
    { path: 'tasks/addtask', component: AddTaskComponent, data: { animation: 'tasks' }},
    { path: 'tasks/edittask/:id', component: EditTaskComponent, resolve:{data : EditTaskResolver} },

    { path: 'team', component: ProjectTeamComponent, data: { animation: 'team' }},
    { path: 'team/addmember', component: AddMemberComponent, data: { animation: 'member' }},
    { path: 'team/editmember/:id', component: EditMemberComponent, resolve:{data : EditMemberResolver} },

    { path: 'reports', component: ProjectReportsComponent, data: { animation: 'reports' }},
  
    { path: 'employees', component: EmployeesComponent, data: { animation: 'employees' }},
    { path: 'employees/newemployees', component: NewEmployeesComponent, data: { animation: 'employees' }},
    { path: 'employees/editemployees/:id', component: EditEmployeesComponent, resolve:{data : EditEmployeesResolver} },
    
    
    { path: 'departments', component: DepartmentsComponent, data: { animation: 'departments' }},
    { path: 'schedules', component: SchedulesComponent, data: { animation: 'schedules' }},
    { path: 'timelog-reports', component: TimelogReportsComponent, data: { animation: 'timelog-reports' }},
  
  ];                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              

@NgModule({
  imports: [
    RouterModule.forChild(pagesRoutes)
  	],
  exports: [
    RouterModule
  ]
})
export class PagesRouterModule {}