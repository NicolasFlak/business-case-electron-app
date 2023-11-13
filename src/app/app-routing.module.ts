import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListComponent} from "./pages/users/list/list.component";
import {DetailsComponent} from "./pages/users/details/details.component";
import {SigninComponent} from "./pages/auth/signin/signin.component";
import {ErrorComponent} from "./pages/error/error.component";
import {authGuard} from "./guards/auth/auth.guard";

const routes: Routes = [
  {path:'',pathMatch: 'full', redirectTo: 'users'},
  { path: 'auth/signin', component: SigninComponent },
  { path: 'users', canActivate: [authGuard], children: [
      { path: '', component: ListComponent}, //chemin de base (users/)
      { path: ':id', component: DetailsComponent}, //chemin avec id en paramètre (user/:id)
    ]
  },
  { path: 'not-found', component: ErrorComponent},
  { path: '**', redirectTo: 'not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
