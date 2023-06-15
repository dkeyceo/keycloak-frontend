import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './foo/create/create.component';
import { DetailComponent } from './foo/detail/detail.component';
import { ListComponent } from './foo/list/list.component';
import { UpdateComponent } from './foo/update/update.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'list', component: ListComponent},
  {path:'detail/:id', component: DetailComponent},
  {path:'update/:id', component: UpdateComponent},
  {path:'create', component: CreateComponent},
  {path:'signup', component: SignupComponent},
  {path: '**', redirectTo: '', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
