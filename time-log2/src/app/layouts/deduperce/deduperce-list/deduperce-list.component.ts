import { Component, OnInit } from '@angular/core';
import { Deduperce } from '../../../shared/models/deduperce';
import { AuthService } from '../../../shared/services/auth.service';
import { DeduperceService } from '../../../shared/services/deduperce.service';
import { ToastrService } from 'src/app/shared/services/toastr.service';

@Component({
  selector: 'app-deduperce-list',
  templateUrl: './deduperce-list.component.html',
  styleUrls: ['./deduperce-list.component.scss']
})
export class DeduperceListComponent implements OnInit {
  
  deduperceList: Deduperce[];
  deduperceObject: Deduperce;

  loading = false;
  brands = ['All', 'A', 'B', 'C', 'D', 'E'];

  selectedBrand: 'All';

  page = 1;
  constructor(
    public authService: AuthService,
    private deduperceService: DeduperceService,
    private toastrService: ToastrService
  ) { }

  ngOnInit() {
    this.getAllDeduperces();
  }

  getAllDeduperces() {
    // this.spinnerService.show();
    console.log("getting deduperces");

    this.loading = true;
    const x = this.deduperceService.getDeduperces();
    x.snapshotChanges().subscribe(
      (deduperce) => {
        this.loading = false;
        // this.spinnerService.hide();
        this.deduperceList = [];
        console.log(" deduperces" + deduperce);

        deduperce.forEach((element) => {
          //con y = element.payload.doc.data(). ..toJSON();
          //y['$key'] = element.key;
          this.deduperceObject = element.payload.doc.data();
          this.deduperceObject.$key = element.payload.doc.id; 
          console.log("data : " + this.deduperceObject.$key); 
          this.deduperceList.push(this.deduperceObject as Deduperce);
        });
      },
      (err) => {
        this.toastrService.error('Error while fetching Deduperces', err);
      }
    );
  }

  removeDeduperce(key: string) {
    this.deduperceService.deleteDeduperce(key);
  }
}