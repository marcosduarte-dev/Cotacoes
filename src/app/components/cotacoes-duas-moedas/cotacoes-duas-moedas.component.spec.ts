import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CotacoesDuasMoedasComponent } from './cotacoes-duas-moedas.component';

describe('CotacoesDuasMoedasComponent', () => {
  let component: CotacoesDuasMoedasComponent;
  let fixture: ComponentFixture<CotacoesDuasMoedasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CotacoesDuasMoedasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CotacoesDuasMoedasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
