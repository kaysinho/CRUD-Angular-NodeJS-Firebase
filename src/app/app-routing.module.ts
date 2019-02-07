import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { NewComponent } from './new/new.component';

const routes: Routes = [
  {
    path: 'contacts',
    component: ListComponent,
  },
  {
    path: 'new',
    component: NewComponent,
  },
  { path: '',
    redirectTo: '/contacts',
    pathMatch: 'full'
  },
  { path: '**', component: ListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
