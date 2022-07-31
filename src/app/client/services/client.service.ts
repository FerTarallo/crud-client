import { Injectable } from '@angular/core';
import { Guid } from "typescript-guid";

import { Client } from '../../shared/models/client.model';

const LOCAL_STORAGE_KEY: string = "clients";

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor() { }

  getAllClients(): Client[] {
    const clients = localStorage[LOCAL_STORAGE_KEY];
    return clients ? JSON.parse(clients) : [];
  }

  addClient(client: Client): void {
    console.log(">>>>>>>>>>", client);
    const clients = this.getAllClients();

    client.id = Guid.create().toString();
    clients.push(client);
    localStorage[LOCAL_STORAGE_KEY] = JSON.stringify(clients);
  }

  editClient(updatedClient: Client): void {
    const clients: Client[] = this.getAllClients();

    clients.forEach(
      (client, index, clients) => {
        if(client.id === updatedClient.id) {
          clients[index] = updatedClient;
        }
      }
    );

    localStorage[LOCAL_STORAGE_KEY] = JSON.stringify(clients);
  }

  deleteClient(id: string): void {
    let clients: Client[] = this.getAllClients();

    clients = clients.filter(client => client.id !== id);
    localStorage[LOCAL_STORAGE_KEY] = JSON.stringify(clients);
  }
}
