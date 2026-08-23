import type { Locator, Page } from '@playwright/test';
import { BasePage } from './base.page';

export class DragAndDropPage extends BasePage {
  readonly columns: Locator;
  readonly columnA: Locator;
  readonly columnB: Locator;

  constructor(page: Page) {
    super(page);
    this.columns = page.locator('#columns').locator('div[id*="column"]');
    this.columnA = this.columns.locator('#column-a');
    this.columnB = this.columns.locator('#column-b');
  }
}