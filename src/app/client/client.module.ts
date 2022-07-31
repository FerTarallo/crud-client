import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { ClientService } from './services/client.service';

import { ListClientsComponent } from './list-clients/list-clients.component';
import { FormClientComponent } from './form-client/form-client.component';
import { EditClientComponent } from './edit-client/edit-client.component';



@NgModule({
  declarations: [
    ListClientsComponent,
    FormClientComponent,
    EditClientComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
  ],
  providers: [
    ClientService
  ]
})
export class ClientModule { }
