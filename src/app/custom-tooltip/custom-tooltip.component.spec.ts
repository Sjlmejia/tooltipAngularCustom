/**
 *
 * Copyright (C) 2021 Hewlett Packard Enterprise Development LP
 *
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomTooltipComponent } from './custom-tooltip.component';

describe('TooltipComponent', () => {
  let component: CustomTooltipComponent;
  let fixture: ComponentFixture<CustomTooltipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomTooltipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomTooltipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
