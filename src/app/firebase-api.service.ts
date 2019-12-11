import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Client } from './client';
import { observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseApiService {

  constructor(private firebaseAPI: AngularFireDatabase) { }

  public createClient(client: Client){
    return this.firebaseAPI.database.ref('clients').push(client);
  }

  public readClient(){
    return this.firebaseAPI.list('clientes').valueChanges();
  }

  public updateClient(Client: Client){
    return this.firebaseAPI.database.ref('clientes/'+Client.id).set(Client);
  }

  public deleteClients(Client: Client){
    return this.firebaseAPI.database.ref('clientes/'+ Client.id).remove();
  }

}
