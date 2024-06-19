import { RouterModule, Routes } from '@angular/router';
import { UserDataDisplayTableComponent } from '../components/user-data-display-table/user-data-display-table.component';
import { CarDataDisplayTableComponent } from '../components/car-data-display-table/car-data-display-table.component';
import { NgModule } from '@angular/core';
import { DefaultDisplayComponent } from '../components/default-display/default-display.component';


const baseUrlRoot = 'hansab';

export const routes: Routes = [
  { path: '', redirectTo: `${baseUrlRoot}/users`, pathMatch: 'full' },
  { path: `${baseUrlRoot}/users`, component: UserDataDisplayTableComponent },
  { path: `${baseUrlRoot}/users/:id`, component: UserDataDisplayTableComponent },
  { path: `${baseUrlRoot}/cars`, component: CarDataDisplayTableComponent },
  { path: `${baseUrlRoot}/cars/:id`, component: CarDataDisplayTableComponent },
  { path: `${baseUrlRoot}/users/**`, redirectTo: `${baseUrlRoot}/users` }, 
  { path: '**', component: DefaultDisplayComponent } 
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }