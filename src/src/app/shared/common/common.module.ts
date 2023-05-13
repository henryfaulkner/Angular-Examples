import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorBoundaryComponent } from './error-boundary/error-boundary.component';

const components = [
  ErrorBoundaryComponent,
]

const modules = [
  CommonModule,
  
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
