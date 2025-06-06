import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StonePaperScissorComponent } from './stone-paper-scissor.component';

describe('StonePaperScissorComponent', () => {
  let component: StonePaperScissorComponent;
  let fixture: ComponentFixture<StonePaperScissorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StonePaperScissorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StonePaperScissorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
