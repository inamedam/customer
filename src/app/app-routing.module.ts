import { ListcustComponent } from './listcust/listcust.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormcustComponent } from './formcust/formcust.component';
import { ProfileComponent } from './profile/profile.component';
import { LogComponent } from './log/log.component';
import { CustComponent } from './cust/cust.component';
import { CustcardComponent } from './custcard/custcard.component';
import { CustproComponent } from './custpro/custpro.component';

const routes: Routes = [
  { path: 'customers', component: ListcustComponent },
  { path: 'addcustomer', component: FormcustComponent },
  { path: 'login', component: LogComponent },
  { path: 'profile', component: CustproComponent},
  { path: 'profile/:id', component: CustproComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
