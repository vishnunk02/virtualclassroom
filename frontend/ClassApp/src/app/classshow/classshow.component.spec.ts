import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassshowComponent } from './classshow.component';

describe('ClassshowComponent', () => {
  let component: ClassshowComponent;
  let fixture: ComponentFixture<ClassshowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClassshowComponent]
    });
    fixture = TestBed.createComponent(ClassshowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
