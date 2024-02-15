import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibroModificacionComponent } from './libro-modificacion.component';

describe('LibroModificacionComponent', () => {
  let component: LibroModificacionComponent;
  let fixture: ComponentFixture<LibroModificacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LibroModificacionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LibroModificacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
