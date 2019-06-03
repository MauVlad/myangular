import { Component, OnInit, OnDestroy } from '@angular/core';
import { Employee } from '../../../shared/models/employee';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../../../shared/services/employee.service';
import { ToastrService } from 'src/app/shared/services/toastr.service';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.scss']
})
export class EmployeeDetailComponent implements OnInit {

  private sub: any;
	employee: Employee;

	constructor(
		private route: ActivatedRoute,
		private employeeService: EmployeeService,
		private toastrService: ToastrService
	) {
		this.employee = new Employee();
	}

	ngOnInit() {
		this.sub = this.route.params.subscribe((params) => {
			const id = params['id']; // (+) converts string 'id' to a number
			this.getEmployeeDetail(id);
		});
	}

	getEmployeeDetail(id: string) {
		// this.spinnerService.show();
		const x = this.employeeService.getEmployeeById(id);
		console.log("id " + id);
		x.snapshotChanges().subscribe(
			(employee) => {
				console.log("employee" + employee)
				// this.spinnerService.hide();
				//const y = employee.payload.data() as employee;
				this.employee = employee.payload.data();

				//y['$key'] = id;
				//this.employee = y;
			},
			(error) => {
				this.toastrService.error('Error while fetching Employee Detail', error);
			}
		);
	}

	addToCart(employee: Employee) {
		this.employeeService.addToCart(employee);
	}

	ngOnDestroy() {
		this.sub.unsubscribe();
	}
}
