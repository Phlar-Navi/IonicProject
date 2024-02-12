import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GameLevelPage } from './game-level.page';

describe('GameLevelPage', () => {
  let component: GameLevelPage;
  let fixture: ComponentFixture<GameLevelPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(GameLevelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
