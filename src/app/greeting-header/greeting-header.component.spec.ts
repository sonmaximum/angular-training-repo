import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { GreetingHeaderComponent } from "./greeting-header.component";

describe("GreetingHeaderComponent", () => {
  let component: GreetingHeaderComponent;
  let fixture: ComponentFixture<GreetingHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GreetingHeaderComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GreetingHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
