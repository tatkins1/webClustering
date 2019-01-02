import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClusterPlotComponent } from './cluster-plot.component';

describe('ClusterPlotComponent', () => {
  let component: ClusterPlotComponent;
  let fixture: ComponentFixture<ClusterPlotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClusterPlotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClusterPlotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
