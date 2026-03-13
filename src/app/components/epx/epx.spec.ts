import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Epx } from './epx';

describe('Epx', () => {
  let component: Epx;
  let fixture: ComponentFixture<Epx>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Epx]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Epx);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
