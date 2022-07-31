import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListClientsComponent } from './client/list-clients/list-clients.component';
import { AddClientComponent } from './client/add-client/add-client.component';
import { EditClientComponent } from './client/edit-client/edit-client.component';

const routes: Routes = [
  { path: '', redirectTo: 'clients/list-clients', pathMatch: 'full' },
  { path: 'clients', redirectTo: 'clients/list-clients'},
  { path: 'clients/list-clients', component: ListClientsComponent },
  { path: 'clients/add-client', component: AddClientComponent },
  { path: 'clients/edit-client/:id', component: EditClientComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
