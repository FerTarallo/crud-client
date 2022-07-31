import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListClientsComponent } from './client/list-clients/list-clients.component';
import { FormClientComponent } from './client/form-client/form-client.component';

const routes: Routes = [
  { path: '', redirectTo: 'clients/list-clients', pathMatch: 'full' },
  { path: 'clients', redirectTo: 'clients/list-clients'},
  { path: 'clients/list-clients', component: ListClientsComponent },
  { path: 'clients/add-client', component: FormClientComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
