import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoanComponent } from './loan/loan.component';
import { LoanDetailComponent } from './loan-detail/loan-detail.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  //{ path: 'detail/:id', component: LoanDetailComponent },
  { path: 'loans', component: LoanComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
