import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DmlDiffComponent } from './dml-diff.component';

describe('DmlDiffComponent', () => {
  let component: DmlDiffComponent;
  let fixture: ComponentFixture<DmlDiffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DmlDiffComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DmlDiffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
