import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentLibraryComponent } from './pages/component-library/component-library.component';
import { KendoGridRemoteComponent } from './pages/kendo/kendo-grid-remote/kendo-grid-remote.component';

const routes: Routes = [
  { path: "kendo-grid-remote", component: KendoGridRemoteComponent },
  { path: "", component: ComponentLibraryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
