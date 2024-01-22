import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchAddComponent } from './watch-add.component';

describe('WatchAddComponent', () => {
  let component: WatchAddComponent;
  let fixture: ComponentFixture<WatchAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WatchAddComponent]
    });
    fixture = TestBed.createComponent(WatchAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
