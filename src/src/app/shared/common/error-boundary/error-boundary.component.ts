import { Component, ErrorHandler } from '@angular/core';

@Component({
  selector: 'app-error-boundary',
  templateUrl: 'error-boundary.component.html',
  styleUrls: ['error-boundary.component.scss']
})
export class ErrorBoundaryComponent {
  public hasError = false;
  public errorMessage = '';

  constructor(private errorHandler: ErrorHandler) {}

  handleError(error: any) {
    this.hasError = true;
    this.errorMessage = error.message || 'Something went wrong.';
    // You can log the error or perform any necessary actions here
    console.error(error);
  }
}