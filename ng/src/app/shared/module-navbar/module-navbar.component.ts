import { Component, Input, AfterViewInit, HostListener, ElementRef, ViewChild } from '@angular/core';
import { fromEvent, throttleTime, debounceTime } from 'rxjs';

@Component({
  selector: 'app-module-navbar',
  templateUrl: './module-navbar.component.html',
  styleUrls: ['./module-navbar.component.scss']
})
export class ModuleNavbarComponent implements AfterViewInit {
  @Input() label= '';
  labelToggle = false;
  @Input() totalNumOfPieces: number = 8;
  @Input() numPiecesCompleted: number = 5;
  @ViewChild('outerRef', { static: true }) outerRef: ElementRef;
  @ViewChild('innerRef', { static: true }) innerRef: ElementRef;
  @ViewChild('labelRef', { static: true }) labelRef: ElementRef;

  ngAfterViewInit() {
    this.resizeInnerBar();
    this.relocateLabel();
    fromEvent(window, 'resize')
      .pipe(throttleTime(200), debounceTime(200))
      .subscribe(() => {
        this.resizeInnerBar();
        this.relocateLabel();
      });

    fromEvent(this.outerRef.nativeElement, 'mouseover')
      .pipe(throttleTime(200), debounceTime(200))
      .subscribe(() => {
        this.labelToggle = true;
      });

    fromEvent(this.outerRef.nativeElement, 'mouseout')
      .pipe(throttleTime(200), debounceTime(200))
      .subscribe(() => {
        this.labelToggle = false;
      });

    fromEvent(this.innerRef.nativeElement, 'mouseover')
      .pipe(throttleTime(200), debounceTime(200))
      .subscribe(() => {
        this.labelToggle = true;
      });

    fromEvent(this.innerRef.nativeElement, 'mouseout')
      .pipe(throttleTime(200), debounceTime(200))
      .subscribe(() => {
        this.labelToggle = false;
      });
  }

  resizeInnerBar() {
    const innerBarRatio = this.numPiecesCompleted / this.totalNumOfPieces;
    const outerWidth = this.outerRef.nativeElement.offsetWidth;
    this.innerRef.nativeElement.style.width = `${outerWidth * innerBarRatio}px`;
  }

  relocateLabel() {
    const outerWidth = this.outerRef.nativeElement.offsetWidth;
    const labelWidth = this.labelRef.nativeElement.offsetWidth;
    this.labelRef.nativeElement.style.left = `${(outerWidth/2) - (labelWidth/2)}px`;
  }
}
