import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaSstComponent } from './lista-sst.component';

describe('ListaSstComponent', () => {
  let component: ListaSstComponent;
  let fixture: ComponentFixture<ListaSstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaSstComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaSstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
