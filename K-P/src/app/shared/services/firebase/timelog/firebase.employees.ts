import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseEmployees {

  constructor(public db: AngularFirestore) {}

  getAvatars(){
      return this.db.collection('/avatar').valueChanges()
  }

  getUser(userKey){
    return this.db.collection('employees').doc(userKey).snapshotChanges();
  }

  updateUser(userKey, value){
    value.nameToSearch = value.name.toLowerCase();
    return this.db.collection('employees').doc(userKey).set(value);
  }

  deleteUser(userKey){
    return this.db.collection('employees').doc(userKey).delete();
  }

  getUsers(){
    return this.db.collection('employees').snapshotChanges();
  }

  searchUsers(searchValue){
    return this.db.collection('employees',ref => ref.where('nameToSearch', '>=', searchValue)
      .where('nameToSearch', '<=', searchValue + '\uf8ff'))
      .snapshotChanges()
  }

  searchUsersByrfc(value){
    return this.db.collection('employees',ref => ref.orderBy('rfc').startAt(value)).snapshotChanges();
  }

  searchUsersBycurp(value){
    return this.db.collection('employees',ref => ref.orderBy('curp').startAt(value)).snapshotChanges();
  }

  searchUsersBynss(value){
    return this.db.collection('employees',ref => ref.orderBy('nss').startAt(value)).snapshotChanges();
  }

  searchUsersByCorreo(value){
    return this.db.collection('employees',ref => ref.orderBy('correo').startAt(value)).snapshotChanges();
  }

  searchUsersByndt(value){
    return this.db.collection('employees',ref => ref.orderBy('ndt').startAt(value)).snapshotChanges();
  }

  searchUsersByrdc(value){
    return this.db.collection('employees',ref => ref.orderBy('rdc').startAt(value)).snapshotChanges();
  }

  searchUsersBytdc(value){
    return this.db.collection('employees',ref => ref.orderBy('tdc').startAt(value)).snapshotChanges();
  }

  searchUsersByrdp(value){
    return this.db.collection('employees',ref => ref.orderBy('rdp').startAt(value)).snapshotChanges();
  }

  searchUsersBytdj(value){
    return this.db.collection('employees',ref => ref.orderBy('tdj').startAt(value)).snapshotChanges();
  }

  searchUsersBydpt(value){
    return this.db.collection('employees',ref => ref.orderBy('dpt').startAt(value)).snapshotChanges();
  }

  searchUsersByPuesto(value){
    return this.db.collection('employees',ref => ref.orderBy('puesto').startAt(value)).snapshotChanges();
  }

  searchUsersByfirt(value){
    return this.db.collection('employees',ref => ref.orderBy('firt').startAt(value)).snapshotChanges();
  }

  searchUsersByatgd(value){
    return this.db.collection('employees',ref => ref.orderBy('atgd').startAt(value)).snapshotChanges();
  }

  searchUsersBypedp(value){
    return this.db.collection('employees',ref => ref.orderBy('pedp').startAt(value)).snapshotChanges();
  }

  searchUsersByordr(value){
    return this.db.collection('employees',ref => ref.orderBy('ordr').startAt(value)).snapshotChanges();
  }

  searchUsersBysalbc(value){
    return this.db.collection('employees',ref => ref.orderBy('salbc').startAt(value)).snapshotChanges();
  }

  searchUsersBysaldi(value){
    return this.db.collection('employees',ref => ref.orderBy('saldi').startAt(value)).snapshotChanges();
  }

  searchUsersByBanco(value){
    return this.db.collection('employees',ref => ref.orderBy('banco').startAt(value)).snapshotChanges();
  }

  searchUsersByClave(value){
    return this.db.collection('employees',ref => ref.orderBy('clave').startAt(value)).snapshotChanges();
  }

  createUser(value, avatar){
    return this.db.collection('employees').add({
      name: value.name,
      nameToSearch: value.name.toLowerCase(),
      surname: value.surname,
      rfc: value.rfc,
      curp: value.curp,
      nss: parseInt(value.nss),
      correo: value.correo,
      avatar: avatar,
      ndt: parseInt(value.ndt),
      rdc: parseInt(value.rdc),
      tdc: parseInt(value.tdc),
      rdp: parseInt(value.rdp),
      tdj: parseInt(value.tdj),
      dpt: value.dpt,
      puesto: value.puesto,
      firt: value.firt,
      atgd: value.atgd,
      pedp: value.pedp,
      ordr: value.ordr,
      salbc: parseInt(value.salbc),
      saldi: parseInt(value.saldi),
      banco: parseInt(value.banco),
      clave: parseInt(value.clave),
    })
  }
}