import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidationMessageComponentComponent } from './validation-message-component.component';

describe('ValidationMessageComponentComponent', () => {
  let component: ValidationMessageComponentComponent;
  let fixture: ComponentFixture<ValidationMessageComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ValidationMessageComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValidationMessageComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
