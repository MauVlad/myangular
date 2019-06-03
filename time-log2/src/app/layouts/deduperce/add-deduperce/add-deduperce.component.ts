import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DeduperceService } from '../../../shared/services/deduperce.service';
import { Deduperce } from '../../../shared/models/deduperce';

declare var $: any;
declare var require: any;
declare var toastr: any;
const shortId = require('shortid');
const moment = require('moment');

@Component({
  selector: 'app-add-deduperce',
  templateUrl: './add-deduperce.component.html',
  styleUrls: ['./add-deduperce.component.scss']
})
export class AddDeduperceComponent implements OnInit {
  
	deduperce: Deduperce = new Deduperce();
	constructor(private deduperceService: DeduperceService) {}

	ngOnInit() {}

	createDeduperce(deduperceForm: NgForm) {
		deduperceForm.value['deduperceId'] = 'EMP_' + shortId.generate();
		deduperceForm.value['deduperceAdded'] = moment().unix();
		deduperceForm.value['ratings'] = Math.floor(Math.random() * 5 + 1);
		if (deduperceForm.value['deduperceImageUrl'] === undefined) {
			deduperceForm.value['deduperceImageUrl'] = 'http://via.placeholder.com/640x360/007bff/ffffff';
		}

		const date = deduperceForm.value['deduperceAdded'];

		this.deduperceService.createDeduperce(deduperceForm.value);

		this.deduperce = new Deduperce();

		toastr.success('deduperce ' + deduperceForm.value['deduperceName'] + 'is added successfully', 'Deduperce Creation');
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