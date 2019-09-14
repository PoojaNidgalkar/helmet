import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowstockComponent } from './showstock.component';

describe('ShowstockComponent', () => {
  let component: ShowstockComponent;
  let fixture: ComponentFixture<ShowstockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowstockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowstockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
