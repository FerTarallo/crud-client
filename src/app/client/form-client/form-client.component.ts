import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Client } from 'src/app/shared/models/client.model';
import { ClientService } from '../services/client.service';

@Component({
  selector: 'app-form-client',
  templateUrl: './form-client.component.html',
  styleUrls: ['./form-client.component.css']
})
export class FormClientComponent implements OnInit {
  client! : Client;
  formClient!: FormGroup;

  constructor(
    private clientService: ClientService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.formClient = new FormGroup({
      name: new FormControl(),
      birthdate: new FormControl('', [Validators.required]),
      cpf: new FormControl('', [Validators.required]),
      cellphone: new FormControl('', [Validators.required]),
      address: new FormGroup({
        street: new FormControl(),
        number: new FormControl(),
        district: new FormControl(),
        city: new FormControl(),
        state: new FormControl(),
        cep: new FormControl()
      }),
      vehicle: new FormControl()
    });
  }

  addClient(): void {
    if(this.formClient.valid) {
      this.clientService.addClient(this.formClient.value);
      this.router.navigate(['/clients']);
    }
  }
}
