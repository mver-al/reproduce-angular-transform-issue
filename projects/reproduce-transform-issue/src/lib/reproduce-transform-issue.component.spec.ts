import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReproduceTransformIssueComponent } from './reproduce-transform-issue.component';

describe('ReproduceTransformIssueComponent', () => {
  let component: ReproduceTransformIssueComponent;
  let fixture: ComponentFixture<ReproduceTransformIssueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReproduceTransformIssueComponent]
    });
    fixture = TestBed.createComponent(ReproduceTransformIssueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
