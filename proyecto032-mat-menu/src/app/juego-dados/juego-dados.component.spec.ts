import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JuegoDadosComponent } from './juego-dados.component';

describe('JuegoDadosComponent', () => {
  let component: JuegoDadosComponent;
  let fixture: ComponentFixture<JuegoDadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JuegoDadosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JuegoDadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
