import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YellowFlowersComponent } from './yellow-flowers.component';

describe('YellowFlowersComponent', () => {
  let component: YellowFlowersComponent;
  let fixture: ComponentFixture<YellowFlowersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YellowFlowersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YellowFlowersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
