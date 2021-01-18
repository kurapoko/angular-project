import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiComponentsEditComponent } from './multi-components-edit.component';

describe('MultiComponentsEditComponent', () => {
  let component: MultiComponentsEditComponent;
  let fixture: ComponentFixture<MultiComponentsEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultiComponentsEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiComponentsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
