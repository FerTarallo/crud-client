import { Component, OnInit, ViewChild } from '@angular/core';
import {  NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { Client } from 'src/app/shared/models/client.model';
import { ClientService } from '../services/client.service';

@Component({
  selector: 'app-form-client',
  templateUrl: './form-client.component.html',
  styleUrls: ['./form-client.component.css']
})
export class AddClientComponent implements OnInit {
  @ViewChild ('form') formClient! : NgForm;
  client! : Client;

  constructor(
    private clientService: ClientService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.client = new Client();
  }

  addClient(): void {
    if(this.client) {
      this.clientService.addClient(this.client);
      this.client = new Client();
      this.router.navigate(['/clients']);
    }
  }
}
