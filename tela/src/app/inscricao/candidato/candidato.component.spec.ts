import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidatoComponent } from './candidato.component';

describe('CandidatoComponent', () => {
  let component: CandidatoComponent;
  let fixture: ComponentFixture<CandidatoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CandidatoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CandidatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
