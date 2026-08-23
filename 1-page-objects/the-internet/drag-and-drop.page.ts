import type { Locator, Page } from '@playwright/test';
import { BasePage } from './base.page';

export class DragAndDropPage extends BasePage {
  readonly columns: Locator;
  readonly columnA: Locator;
  readonly columnB: Locator;

  constructor(page: Page) {
    super(page);
    this.columns = page.locator('#columns').locator('div[id*="column"]');
    this.columnA = page.locator('#column-a');
    this.columnB = page.locator('#column-b');
  }

  async goToDragAndDropPage(): Promise<void> {
    await this.goToPage('https://the-internet.herokuapp.com/');
    await this.goToPageLink('Drag and Drop');
  }
}