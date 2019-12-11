import { Component, OnInit } from '@angular/core';
import { ClientDataService } from 'src/app/client-data.service';

@Component({
  selector: 'app-numeros',
  templateUrl: './numeros.component.html',
  styleUrls: ['./numeros.component.scss'],
})
export class NumerosComponent implements OnInit {

  constructor(private quoteRepository: ClientDataService) {}

  ngOnInit(){
    console.log('init');
  }

  get quotes(){
    return this.quoteRepository.getClients()
  }

}
