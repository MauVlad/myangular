import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { AvatarDialogComponent } from "../../../pos/products/avatar-dialog/avatar-dialog.component";
import { Router } from '@angular/router';
import { FirebaseEmployees } from '../../../../shared/services/firebase/timelog/firebase.employees';

@Component({
  selector: 'app-new-employees',
  templateUrl: './new-employees.component.html',
  styleUrls: ['./new-employees.component.scss']
})
export class NewEmployeesComponent implements OnInit {
  exampleForm: FormGroup;
  avatarLink: string = "https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg";

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
    private fb: FormBuilder,
    public dialog: MatDialog,
    private router: Router,
    public firebaseService: FirebaseEmployees

  ) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.exampleForm = this.fb.group({
      name: ['', Validators.required ],
      surname: ['', Validators.required ],
      rfc: ['', Validators.required ],
      curp: ['', Validators.required ],
      nss: ['', Validators.required ],
      correo: ['', Validators.required ],
      ndt: ['', Validators.required ],
      rdc: ['', Validators.required],
      tdc: ['', Validators.required],
      rdp: ['', Validators.required],
      tdj: ['', Validators.required],
      dpt: ['', Validators.required],
      puesto: ['', Validators.required],
      firt: ['', Validators.required],
      atgd: ['', Validators.required],
      pedp: ['', Validators.required],
      ordr: ['', Validators.required],
      salbc: ['', Validators.required],
      saldi: ['', Validators.required],
      banco: ['', Validators.required],
      clave: ['', Validators.required],
    });
  }

  openDialog() {
    const dialogRef = this.dialog.open(AvatarDialogComponent, {
      height: '400px',
      width: '400px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.avatarLink = result.link;
      }
    });
  }

  resetFields(){
    this.avatarLink = "https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg";
    this.exampleForm = this.fb.group({
      name: new FormControl('', Validators.required),
      surname: new FormControl('', Validators.required),
      rfc: new FormControl('', Validators.required),
      curp: new FormControl('', Validators.required),
      nss: new FormControl('', Validators.required),
      correo: new FormControl('', Validators.required),
      ndt: new FormControl('', Validators.required),
      rdc: new FormControl('', Validators.required),
      tdc: new FormControl('', Validators.required),
      rdp: new FormControl('', Validators.required),
      tdj: new FormControl('', Validators.required),
      dpt: new FormControl('', Validators.required),
      puesto: new FormControl('', Validators.required),
      firt: new FormControl('', Validators.required),
      atgd: new FormControl('', Validators.required),
      pedp: new FormControl('', Validators.required),
      ordr: new FormControl('', Validators.required),
      salbc: new FormControl('', Validators.required),
      saldi: new FormControl('', Validators.required),
      banco: new FormControl('', Validators.required),
      clave: new FormControl('', Validators.required),
    });
  }

  onSubmit(value){
    this.firebaseService.createUser(value, this.avatarLink)
    .then(
      res => {
        this.resetFields();
        this.router.navigate(['/auth/pages/employees']);
      }
    )
  }

  id: number;
  rol: string;

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

