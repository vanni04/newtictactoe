import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Player2Component } from './player2.component';

describe('Player2Component', () => {
  let component: Player2Component;
  let fixture: ComponentFixture<Player2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Player2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Player2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
