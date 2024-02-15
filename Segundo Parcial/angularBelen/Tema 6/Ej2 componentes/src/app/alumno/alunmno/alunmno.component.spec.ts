import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlunmnoComponent } from './alunmno.component';

describe('AlunmnoComponent', () => {
  let component: AlunmnoComponent;
  let fixture: ComponentFixture<AlunmnoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlunmnoComponent]
    });
    fixture = TestBed.createComponent(AlunmnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
