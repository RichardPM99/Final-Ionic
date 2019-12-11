import { Component, OnInit } from '@angular/core';
import { ClientDataService } from 'src/app/client-data.service';

@Component({
  selector: 'app-dias',
  templateUrl: './dias.component.html',
  styleUrls: ['./dias.component.scss'],
})
export class DiasComponent implements OnInit {

  constructor(private quoteRepository: ClientDataService) {}

  ngOnInit(){
    console.log('init');
  }

  get quotes(){
    return this.quoteRepository.getClients()
  }

}
