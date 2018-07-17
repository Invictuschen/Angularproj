import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ass2gnComponent } from './ass2gn.component';

describe('Ass2gnComponent', () => {
  let component: Ass2gnComponent;
  let fixture: ComponentFixture<Ass2gnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ass2gnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ass2gnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
