import { Component, OnInit } from '@angular/core';

import { ClientService } from '../services/client.service';

import { Client } from 'src/app/shared/models/client.model';

@Component({
  selector: 'app-list-clients',
  templateUrl: './list-client.component.html',
  styleUrls: ['./list-client.component.css']
})
export class ListClientComponent implements OnInit {
  clients: Client[] = [];

  constructor(
    private clientService: ClientService
  ) { }

  ngOnInit(): void {
    this.clients = this.getAllClients();
  }

  getAllClients(): Client[] {
    return this.clientService.getAllClients();
  }

  deleteClient($event: any, client: Client): void {
    $event.preventDefault();
    if(confirm(`Realmente deseja excluir este cliente ${client.name} ?`)) {
      this.clientService.deleteClient(client.id!);
      this.clients = this.getAllClients();
    }
  }
}
