import { Component, OnInit } from '@angular/core';

import { ClientService } from '../services/client.service';

import { Client } from 'src/app/shared/models/client.model';

@Component({
  selector: 'app-list-clients',
  templateUrl: './list-clients.component.html',
  styleUrls: ['./list-clients.component.css']
})
export class ListClientsComponent implements OnInit {
  clients: Client[] = [];

  constructor(
    private clientService: ClientService,
  ) { }

  ngOnInit(): void {
    this.clients = this.getAllClients();
  }

  getAllClients(): Client[] {
    return this.clientService.getAllClients();
  }
}
