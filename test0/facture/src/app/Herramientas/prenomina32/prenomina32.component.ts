
import {fromEvent as observableFromEvent,  Observable } from 'rxjs';

import {distinctUntilChanged, debounceTime} from 'rxjs/operators';
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { ExampleDatabase, ExampleDataSource } from './helpers.data';

@Component({
  selector: 'cdk-filter-table',
  templateUrl: './prenomina32.component.html',
  styleUrls: ['./prenomina32.component.scss']
})
export class PreNomina32 implements OnInit {

	public displayedColumns = ['userId', 'userName', 'progress', 'color'];
	public exampleDatabase = new ExampleDatabase();
	public dataSource: ExampleDataSource | null;
  	public showFilterTableCode;
  	@ViewChild('filter') filter: ElementRef;
  	constructor() { }

  	ngOnInit() {
  		this.dataSource = new ExampleDataSource(this.exampleDatabase);
        observableFromEvent(this.filter.nativeElement, 'keyup').pipe(
            debounceTime(150),
            distinctUntilChanged(),)
            .subscribe(() => {
              if (!this.dataSource) { return; }
              this.dataSource.filter = this.filter.nativeElement.value;
            });
    }

}
