import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmployeeService } from '../../../shared/services/employee.service';
import { Employee } from '../../../shared/models/employee';

declare var $: any;
declare var require: any;
declare var toastr: any;
const shortId = require('shortid');
const moment = require('moment');

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent implements OnInit {
  
	employee: Employee = new Employee();
	constructor(private employeeService: EmployeeService) {}

	ngOnInit() {}

	createEmployee(employeeForm: NgForm) {
		employeeForm.value['employeeId'] = 'EMP_' + shortId.generate();
		employeeForm.value['employeeAdded'] = moment().unix();
		employeeForm.value['ratings'] = Math.floor(Math.random() * 5 + 1);
		if (employeeForm.value['employeeImageUrl'] === undefined) {
			employeeForm.value['employeeImageUrl'] = 'http://via.placeholder.com/640x360/007bff/ffffff';
		}

		const date = employeeForm.value['employeeAdded'];

		this.employeeService.createEmployee(employeeForm.value);

		this.employee = new Employee();

		toastr.success('employee ' + employeeForm.value['employeeName'] + 'is added successfully', 'Employee Creation');
	}


  id: number;
  id1: number;
  id2: number;
  id3: number;
  id4: number;
  id5: number;

  userRols: any[] = [
    {id: 'A', rol: 'A'},
    {id: 'B', rol: 'B'},
    {id: 'C', rol: 'C'},
    {id: 'D', rol: 'D'}
  ];

  userTips: any[] = [
    {id1: 'X', tip: 'X'},
    {id1: 'Y', tip: 'Y'},
    {id1: 'Z', tip: 'Z'},
    {id1: 'W', tip: 'W'}
  ];

  userRigs: any[] = [
    {id2: '-___', rig: '-___'},
    {id2: '--__', rig: '--__'},
    {id2: '---_', rig: '---_'},
    {id2: '----', rig: '----'}
  ];

  userJors: any[] = [
    {id3: 'A1', jor: 'A1'},
    {id3: 'B1', jor: 'B1'},
    {id3: 'C1', jor: 'C1'},
    {id3: 'D1', jor: 'D1'}
  ];

  userRecs: any[] = [
    {id4: 'X1', rec: 'X1'},
    {id4: 'Y1', rec: 'Y1'},
    {id4: 'Z1', rec: 'Z1'},
    {id4: 'W1', rec: 'W1'}
  ];

  userBcos: any[] = [
    {id5: 'Banco 1', bco: 'BANCO 1'},
    {id5: 'Banco 2', bco: 'BANCO 2'},
    {id5: 'Banco 3', bco: 'BANCO 3'},
    {id5: 'Banco 4', bco: 'BANCO 4'}
  ];
}