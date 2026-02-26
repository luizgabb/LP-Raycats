import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Esteira } from './esteira';

describe('Esteira', () => {
  let component: Esteira;
  let fixture: ComponentFixture<Esteira>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Esteira]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Esteira);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
