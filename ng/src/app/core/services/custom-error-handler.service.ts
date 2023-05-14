import { ErrorHandler, Injectable, Injector } from '@angular/core';
import { ErrorBoundaryComponent } from 'src/app/shared/common/error-boundary/error-boundary.component';

// https://www.c-sharpcorner.com/article/graceful-error-handling-with-error-boundary-components-in-angular/
@Injectable()
export class CustomErrorHandler implements ErrorHandler {
  private injector: Injector;

  constructor(injector: Injector) {
    this.injector = injector;
  }

  handleError(error: any): void {
    const errorBoundary = this.injector.get(ErrorBoundaryComponent);
    errorBoundary.handleError(error);
  }
}