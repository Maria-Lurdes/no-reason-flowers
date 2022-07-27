import {ComponentFixture, TestBed} from '@angular/core/testing';

import {FlowersWallpaperComponent} from './flowers-wallpaper.component';

describe('FlowersWallpaperComponent', () => {
  let component: FlowersWallpaperComponent;
  let fixture: ComponentFixture<FlowersWallpaperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FlowersWallpaperComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(FlowersWallpaperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
