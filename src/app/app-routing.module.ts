import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './page/user-list/user-list.component';

const routes: Routes = [
  /* table */
  {
    path: '',
    component: UserListComponent
  },
  {
    path: '**',
    component: UserListComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
