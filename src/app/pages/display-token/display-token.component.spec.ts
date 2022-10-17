import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayTokenComponent } from './display-token.component';

describe('DisplayTokenComponent', () => {
  let component: DisplayTokenComponent;
  let fixture: ComponentFixture<DisplayTokenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayTokenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayTokenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
