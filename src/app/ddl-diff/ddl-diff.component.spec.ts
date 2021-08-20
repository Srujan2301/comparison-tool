import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DdlDiffComponent } from './ddl-diff.component';

describe('DdlDiffComponent', () => {
  let component: DdlDiffComponent;
  let fixture: ComponentFixture<DdlDiffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DdlDiffComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DdlDiffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
