import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokertableComponent } from './pokertable.component';

describe('PokertableComponent', () => {
  let component: PokertableComponent;
  let fixture: ComponentFixture<PokertableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokertableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokertableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
