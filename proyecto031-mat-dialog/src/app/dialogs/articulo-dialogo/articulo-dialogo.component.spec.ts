import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticuloDialogoComponent } from './articulo-dialogo.component';

describe('ArticuloDialogoComponent', () => {
  let component: ArticuloDialogoComponent;
  let fixture: ComponentFixture<ArticuloDialogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticuloDialogoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArticuloDialogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
