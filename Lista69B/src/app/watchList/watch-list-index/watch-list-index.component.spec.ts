import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchListIndexComponent } from './watch-list-index.component';

describe('WatchListIndexComponent', () => {
  let component: WatchListIndexComponent;
  let fixture: ComponentFixture<WatchListIndexComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WatchListIndexComponent]
    });
    fixture = TestBed.createComponent(WatchListIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
