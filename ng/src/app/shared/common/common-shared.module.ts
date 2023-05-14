import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorBoundaryComponent } from './error-boundary/error-boundary.component';
import { GridModule } from '@progress/kendo-angular-grid';

const components = [
  ErrorBoundaryComponent,
]

const modules = [
  CommonModule,
  GridModule
]

@NgModule({
  declarations: [
    ...components
  ],
  imports: [
    ...modules
  ],
  exports: [
    ...components, ...modules
  ]
})
export class CommonSharedModule { }
