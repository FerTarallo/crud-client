import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from 'src/app/shared/models/client.model';
import { ClientService } from '../services/client.service';

@Component({
  selector: 'app-edit-client',
  templateUrl: './edit-client.component.html',
  styleUrls: ['./edit-client.component.css']
})
export class EditClientComponent implements OnInit {
  @ViewChild("form") formClient!: NgForm;
  client!: Client;

  constructor(
    private clientService: ClientService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    console.log(">>>> ID: ", id)
    const client = this.clientService.findClientById(id);
    console.log(">>>>>> cliente:", client)
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

}
