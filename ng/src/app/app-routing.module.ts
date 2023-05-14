import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KendoGridRemoteComponent } from './pages/kendo/kendo-grid-remote/kendo-grid-remote.component';

const routes: Routes = [
  { path: "kendo-grid-remote", component: KendoGridRemoteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
