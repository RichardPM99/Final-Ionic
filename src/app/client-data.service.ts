import { Injectable } from '@angular/core';
import { Client } from './client';
import { ClientService } from './client.service';

@Injectable({
  providedIn: 'root'
})
export class ClientDataService {
  private clientes: Client[] = [];

  constructor(private dataSource: ClientService) { 
    this.dataSource.getClients()
      .subscribe((response) =>{
        this.clientes = response.clients;
      })

  }
    

      getClients():Client[] {
        return this.clientes;
        
      }
}
