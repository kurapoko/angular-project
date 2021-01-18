import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiComponentsDetailComponent } from './multi-components-detail.component';

describe('MultiComponentsDetailComponent', () => {
  let component: MultiComponentsDetailComponent;
  let fixture: ComponentFixture<MultiComponentsDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultiComponentsDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiComponentsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
