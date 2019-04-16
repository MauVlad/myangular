import { Component, OnInit } from '@angular/core';
import { FirebaseEmployees } from '../../../shared/services/firebase/timelog/firebase.employees';
import { Router, Params } from '@angular/router';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {

  rfcValue: string = "";
  searchValue: string = "";
  items: Array<any>;
  rfc_filtered_items: Array<any>;
  name_filtered_items: Array<any>;

  constructor(
    public firebaseService: FirebaseEmployees,
    private router: Router
  ) { }

  ngOnInit() {
    this.getData();
  }

  getData(){
    this.firebaseService.getUsers()
    .subscribe(result => {
      this.items = result;
      this.rfc_filtered_items = result;
      this.name_filtered_items = result;
    })
  }

  viewDetails(item){
    console.log(item);
    this.router.navigate(['/auth/pages/employees/editemployees/'+ item.payload.doc.id])
    //this.router.navigate(['/auth/pages/products/editproduct'])
  }

  capitalizeFirstLetter(value){
    return value.charAt(0).toUpperCase() + value.slice(1);
  }

  searchByName(){

    let value = this.searchValue.toLowerCase();
    this.firebaseService.searchUsers(value)
    .subscribe(result => {
      this.name_filtered_items = result;
      this.items = this.combineLists(result, this.rfc_filtered_items);
    })
  }

  rangeChange(event){
    this.firebaseService.searchUsersByrfc(event.value)
    .subscribe(result =>{
      this.rfc_filtered_items = result;
      this.items = this.combineLists(result, this.name_filtered_items);
    })
  }

  combineLists(a, b){
    let result = [];

    a.filter(x => {
      return b.filter(x2 =>{
        if(x2.payload.doc.id == x.payload.doc.id){
          result.push(x2);
        }
      });
    });
    return result;
  }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
}
