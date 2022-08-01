import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { ClientService } from '../services/client.service';
import { VehicleService } from '../services/vehicle.service';

import { Client } from 'src/app/shared/models/client.model';
@Component({
  selector: 'app-form-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {
  @ViewChild ('form') formClient! : NgForm;
  client! : Client;
  vehicles: any[] = [];

  constructor(
    private clientService: ClientService,
    private vehicleService: VehicleService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.client = new Client();
    this.vehicles = this.getVehicles();
  }

  addClient(): void {
    if(this.client) {
      console.log("asdasd",this.formClient)
      this.clientService.addClient(this.client);
      this.client = new Client();
      this.router.navigate(['/clients']);
    }
  }

  getVehicles(): any[] {
    return this.vehicleService.getVehicles();
  }
}
