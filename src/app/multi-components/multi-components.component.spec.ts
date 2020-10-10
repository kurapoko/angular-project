import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiComponentsComponent } from './multi-components.component';

describe('MultiComponentsComponent', () => {
  let component: MultiComponentsComponent;
  let fixture: ComponentFixture<MultiComponentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultiComponentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
