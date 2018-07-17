import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ass1gnComponent } from './ass1gn.component';

describe('Ass1gnComponent', () => {
  let component: Ass1gnComponent;
  let fixture: ComponentFixture<Ass1gnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ass1gnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ass1gnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
