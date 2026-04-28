import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Gridtable } from './gridtable';

describe('Gridtable', () => {
  let component: Gridtable;
  let fixture: ComponentFixture<Gridtable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Gridtable]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Gridtable);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
