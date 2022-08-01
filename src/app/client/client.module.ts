import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxMaskModule } from 'ngx-mask'

import { ClientService } from './services/client.service';

import { ListClientComponent } from './list-client/list-client.component';
import { AddClientComponent } from './add-client/add-client.component';
import { EditClientComponent } from './edit-client/edit-client.component';

export const routes: Routes = [
  { path: '', component: ListClientComponent },
  { path: 'clients', component: ListClientComponent },
  { path: 'clients/add-client', component: AddClientComponent },
  { path: 'clients/edit-client/:id', component: EditClientComponent }
];

@NgModule({
  declarations: [
    ListClientComponent,
    AddClientComponent,
    EditClientComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    FormsModule,
    HttpClientModule,
    NgxMaskModule.forRoot({
      dropSpecialCharacters: false
    })
  ],
  providers: [
    ClientService
  ]
})
export class ClientModule { }
