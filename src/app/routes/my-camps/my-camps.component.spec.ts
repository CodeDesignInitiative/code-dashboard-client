import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {MyCampsComponent} from './my-camps.component';

describe('MyCampsComponent', () => {
  let component: MyCampsComponent;
  let fixture: ComponentFixture<MyCampsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MyCampsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyCampsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
