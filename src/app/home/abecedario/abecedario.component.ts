import { Component, OnInit } from '@angular/core';
import { ClientDataService } from 'src/app/client-data.service';

@Component({
  selector: 'app-abecedario',
  templateUrl: './abecedario.component.html',
  styleUrls: ['./abecedario.component.scss'],
})
export class AbecedarioComponent implements OnInit {

  constructor(private quoteRepository: ClientDataService) {}

  ngOnInit(){
    console.log('init');
  }

  get quotes(){
    return this.quoteRepository.getClients()
  }

}
