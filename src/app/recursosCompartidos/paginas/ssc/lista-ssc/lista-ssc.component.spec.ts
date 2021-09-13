import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaSscComponent } from './lista-ssc.component';

describe('ListaSscComponent', () => {
  let component: ListaSscComponent;
  let fixture: ComponentFixture<ListaSscComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaSscComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaSscComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
