import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { AvatarDialogComponent } from "../../../pos/products/avatar-dialog/avatar-dialog.component";
import { FirebaseEmployees } from '../../../../shared/services/firebase/timelog/firebase.employees';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-employees',
  templateUrl: './edit-employees.component.html',
  styleUrls: ['./edit-employees.component.scss']
})
export class EditEmployeesComponent implements OnInit {

  exampleForm: FormGroup;
  item: any;

  validation_messages = {
   'name': [
     { type: 'required', message: 'Name is required.' }
   ],
   'surname': [
     { type: 'required', message: 'Surname is required.' }
   ],
   'rfc': [
     { type: 'required', message: 'RFC is required.'}
   ],
   'curp': [
    { type: 'required', message: 'CURP is required'}
  ],
  'nss': [
    { type: 'required', message: 'N° de seguro social is requered'}
  ],
  'correo': [
    { type: 'required', message: 'Correo is requered'}
  ],
  'ndt': [
    { type: 'required', message: 'N° de trabajo is requered'}
  ],
  'rdc': [
    { type: 'required', message: 'Regimen de contratación is requered'}
  ],
  'tdc': [
    { type: 'required', message: 'Tipo de contrato is requered'}
   ],
  'rdp': [
    { type: 'required', message: 'Riesgo de Puesto is requered'}
  ],
  'tdj': [
    { type: 'required', message: 'Tipo de jornada is requered'}
  ],
  'dpt': [
    { type: 'required', message: 'Departamento is requered'}
  ],
  'puesto': [
    { type: 'required', message: 'Puesto is requered'}
  ],
  'firt': [
    { type: 'required', message: 'Fecha inicial de relación de trabajo is requered'}
  ],
  'atgd': [
    { type: 'required', message: 'Antigüedad is requered'}
  ],
  'pedp': [
    { type: 'required', message: 'Periodicidad de pago is requered'}
  ],
  'ordr': [
    { type: 'required', message: 'Origen del recurso is requered'}
  ],
  'salbc': [
    { type: 'required', message: 'Salario base de cotización is requered'}
  ],
  'saldi': [
    { type: 'required', message: 'Salario diario integro is requered'}
  ],
  'banco': [
    { type: 'required', message: 'Banco is requered'}
  ],
  'clave': [
    { type: 'required', message: 'Clave Bancaria is requered'}
  ],
 };

  constructor(
    public firebaseService: FirebaseEmployees,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.route.data.subscribe(routeData => {
      let data = routeData['data'];
      if (data) {
        this.item = data.payload.data();
        this.item.id = data.payload.id;
        this.createForm();
      }
    })
  }

  createForm() {
    this.exampleForm = this.fb.group({
      name: [this.item.name, Validators.required],
      surname: [this.item.surname, Validators.required],
      rfc: [this.item.rfc, Validators.required],
      curp: [this.item.curp, Validators.required],
      nss: [this.item.nss, Validators.required],
      correo: [this.item.correo, Validators.required],
      ndt: [this.item.ndt, Validators.required],
      rdc: [this.item.rdc, Validators.required],
      tdc: [this.item.tdc, Validators.required],
      rdp: [this.item.rdp, Validators.required],
      tdj: [this.item.tdj, Validators.required],
      dpt: [this.item.dpt, Validators.required],
      puesto: [this.item.puesto, Validators.required],
      firt: [this.item.firt, Validators.required],
      atgd: [this.item.atgd, Validators.required],
      pedp: [this.item.pedp, Validators.required],
      ordr: [this.item.ordr, Validators.required],
      salbc: [this.item.salbc, Validators.required],
      saldi: [this.item.saldi, Validators.required],
      banco: [this.item.banco, Validators.required],
      clave: [this.item.clave, Validators.required],
    });
  }

  openDialog() {
    const dialogRef = this.dialog.open(AvatarDialogComponent, {
      height: '400px',
      width: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.item.avatar = result.link;
      }
    });
  }

  onSubmit(value){
    value.avatar = this.item.avatar;
    value.rfc = value.rfc;
    value.curp = value.curp;
    value.nss = value.nss;
    value.correo = value.correo;
    value.ndt = value.ndt;
    value.rdc = value.rdc;
    value.tdc = value.tdc;
    value.rdp = value.rdp;
    value.tdj = value.tdj;
    value.dpt = value.dpt;
    value.puesto = value.puesto;
    value.firt = value.firt;
    value.atgd = value.atgd;
    value.pedp = value.pedp;
    value.ordr = value.ordr;
    value.salbc = value.salbc;
    value.saldi = value.saldi;
    value.banco = value.banco;
    value.clave = value.clave;
    value.id = value.rdc;
    value.id1 = value.rdc;
    value.id2 = value.rdc;
    value.id3 = value.rdc;
    value.id4 = value.rdc;
    value.id5 = value.rdc;
    this.firebaseService.updateUser(this.item.id, value)
    .then(
      res => {
        this.router.navigate(['/auth/pages/employees']);
      }
    )
  }

  delete(){
    this.firebaseService.deleteUser(this.item.id)
    .then(
      res => {
        this.router.navigate(['/auth/pages/employees']);
      },
      err => {
        console.log(err);
      }
    )
  }

  cancel(){
    this.router.navigate(['/auth/pages/employees']);
  }

  id;
  id1;
  id2;
  id3;
  id4;
  id5;

  userRols: any[] = [
    {id: 1, rol: 'A'},
    {id: 2, rol: 'B'},
    {id: 3, rol: 'C'},
    {id: 4, rol: 'D'}
  ];

  userTips: any[] = [
    {id1: 1, tip: 'X'},
    {id1: 2, tip: 'Y'},
    {id1: 3, tip: 'Z'},
    {id1: 4, tip: 'W'}
  ];

  userRigs: any[] = [
    {id2: 1, rig: '-___'},
    {id2: 2, rig: '--__'},
    {id2: 3, rig: '---_'},
    {id2: 4, rig: '----'}
  ];

  userJors: any[] = [
    {id3: 1, jor: 'A1'},
    {id3: 2, jor: 'B1'},
    {id3: 3, jor: 'C1'},
    {id3: 4, jor: 'D1'}
  ];

  userRecs: any[] = [
    {id4: 1, rec: 'X1'},
    {id4: 2, rec: 'Y1'},
    {id4: 3, rec: 'Z1'},
    {id4: 4, rec: 'W1'}
  ];

  userBcos: any[] = [
    {id5: 1, bco: 'BANCO 1'},
    {id5: 2, bco: 'BANCO 2'},
    {id5: 3, bco: 'BANCO 3'},
    {id5: 4, bco: 'BANCO 4'}
  ];
}