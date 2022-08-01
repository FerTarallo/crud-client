import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { ClientService } from '../services/client.service';
import { VehicleService } from '../services/vehicle.service';

import { Client } from 'src/app/shared/models/client.model';
@Component({
  selector: 'app-edit-client',
  templateUrl: './edit-client.component.html',
  styleUrls: ['./edit-client.component.css']
})
export class EditClientComponent implements OnInit {
  @ViewChild("form") formClient!: NgForm;
  client!: Client;
  vehicles: any[] = [];

  constructor(
    private clientService: ClientService,
    private vehicleService: VehicleService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.vehicles = this.getVehicles();
    let id = this.route.snapshot.params['id'];
    const client = this.clientService.findClientById(id);
    if(client !== undefined) {
      this.client = client;
    }
    else {
      throw new Error("Cliente não encontrado.")
    }
  }

  editClient(): void {
    if(this.formClient.form.valid) {
      this.clientService.editClient(this.client);
      console.log(">>>>>> cliente:", this.client)
      this.router.navigate(['/clients']);
    }
  }

  getVehicles(): any[] {
    return this.vehicleService.getVehicles();
  }

}
