import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MinesGridComponent } from './mines-grid.component';

describe('MinesGridComponent', () => {
  let component: MinesGridComponent;
  let fixture: ComponentFixture<MinesGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinesGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinesGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
