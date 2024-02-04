import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoneInputComponent } from './fone-input.component';

describe('FoneInputComponent', () => {
  let component: FoneInputComponent;
  let fixture: ComponentFixture<FoneInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FoneInputComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FoneInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
