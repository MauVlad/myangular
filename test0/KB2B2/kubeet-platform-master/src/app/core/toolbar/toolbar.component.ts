import { Component, OnInit, Input } from '@angular/core';
import { ToolbarHelpers } from './toolbar.helpers';
import {Router} from "@angular/router";

@Component({
  selector: 'cdk-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
	
  @Input() sidenav;
	@Input() sidebar;
	@Input() drawer;
	@Input() matDrawerShow;
  
	searchOpen: boolean = false;
    toolbarHelpers = ToolbarHelpers;
  	constructor(private _router : Router) { }

  	ngOnInit() {
  	}

		navCar()
		{
		//	alert("navigate...");
			this._router.navigate(['/auth/pages/car']);

		}
}
