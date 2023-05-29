import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleNavbarComponent } from './module-navbar.component';

describe('ModuleNavbarComponent', () => {
  let component: ModuleNavbarComponent;
  let fixture: ComponentFixture<ModuleNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModuleNavbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModuleNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
