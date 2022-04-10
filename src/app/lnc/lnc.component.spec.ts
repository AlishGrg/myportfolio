import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LncComponent } from './lnc.component';

describe('LncComponent', () => {
  let component: LncComponent;
  let fixture: ComponentFixture<LncComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LncComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
