import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlueComponent } from './components/blue/blue.component';
import { RedComponent } from './components/red/red.component';
import { RoutedInformationComponent } from './components/routed-information/routed-information.component';
import { TableDataComponent } from './components/table-data/table-data.component';

const routes: Routes = [
  {path: 'routed', component: RoutedInformationComponent},
  {path: 'red', component: RedComponent},
  {path: 'blue', component: BlueComponent},
  {path: 'tabledata', component: TableDataComponent},

  {path: '', redirectTo:'routed', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
