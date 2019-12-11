import { Component, OnInit } from '@angular/core';
import { ClientDataService } from 'src/app/client-data.service';

@Component({
  selector: 'app-content1',
  templateUrl: './content1.component.html',
  styleUrls: ['./content1.component.scss'],
})
export class Content1Component implements OnInit {
  constructor(private quoteRepository: ClientDataService) {}

  ngOnInit(){
    console.log('init');
  }

  get quotes(){
    return this.quoteRepository.getClients()
  }
}
