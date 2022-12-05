import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuariosConectadosComponent } from './usuarios-conectados.component';

describe('UsuariosConectadosComponent', () => {
  let component: UsuariosConectadosComponent;
  let fixture: ComponentFixture<UsuariosConectadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsuariosConectadosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsuariosConectadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
