import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserEditorComponent } from './page/user-editor/user-editor.component';
import { UserListComponent } from './page/user-list/user-list.component';

const routes: Routes = [
  /* table */
  {
    path: '',
    component: UserListComponent,
  },
  /* editor */
  {
    path: 'user/:id',
    component: UserEditorComponent,
  },
  /* table */
  {
    path: '**',
    component: UserListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
