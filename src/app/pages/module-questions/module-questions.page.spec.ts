import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModuleQuestionsPage } from './module-questions.page';

describe('ModuleQuestionsPage', () => {
  let component: ModuleQuestionsPage;
  let fixture: ComponentFixture<ModuleQuestionsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ModuleQuestionsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
