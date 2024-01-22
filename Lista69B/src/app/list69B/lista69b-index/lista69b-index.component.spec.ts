import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lista69bIndexComponent } from './lista69b-index.component';

describe('Lista69bIndexComponent', () => {
  let component: Lista69bIndexComponent;
  let fixture: ComponentFixture<Lista69bIndexComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Lista69bIndexComponent]
    });
    fixture = TestBed.createComponent(Lista69bIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
