import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateclassComponent } from './createclass.component';

describe('CreateclassComponent', () => {
  let component: CreateclassComponent;
  let fixture: ComponentFixture<CreateclassComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateclassComponent]
    });
    fixture = TestBed.createComponent(CreateclassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
