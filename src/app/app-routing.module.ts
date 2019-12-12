import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogincomponentComponent } from './logincomponent/logincomponent.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';


const routes: Routes = [
  { path: 'login', component: LogincomponentComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'user', component: UserComponent },
  {path : '', component : LogincomponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
