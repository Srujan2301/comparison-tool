import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchemaResponseComponent } from './schema-response.component';

describe('SchemaResponseComponent', () => {
  let component: SchemaResponseComponent;
  let fixture: ComponentFixture<SchemaResponseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchemaResponseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SchemaResponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
