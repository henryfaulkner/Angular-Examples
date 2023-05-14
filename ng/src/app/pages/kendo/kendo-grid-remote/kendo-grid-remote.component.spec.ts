import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KendoGridRemoteComponent } from './kendo-grid-remote.component';

describe('KendoGridRemoteComponent', () => {
  let component: KendoGridRemoteComponent;
  let fixture: ComponentFixture<KendoGridRemoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KendoGridRemoteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KendoGridRemoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
