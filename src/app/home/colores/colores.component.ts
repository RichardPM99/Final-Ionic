import { Component, OnInit } from '@angular/core';
import { ClientDataService } from 'src/app/client-data.service';

@Component({
  selector: 'app-colores',
  templateUrl: './colores.component.html',
  styleUrls: ['./colores.component.scss'],
})
export class ColoresComponent implements OnInit {

  constructor(private quoteRepository: ClientDataService) {}

  ngOnInit(){
    console.log('init');
  }

  get quotes(){
    return this.quoteRepository.getClients()
  }

}
