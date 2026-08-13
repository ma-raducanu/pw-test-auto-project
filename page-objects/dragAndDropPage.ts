import type { Locator, Page } from '@playwright/test';
import { BasePage } from './basePage';

export class DragAndDropPage extends BasePage {
  readonly columns: Locator;

  constructor(page: Page) {
    super(page);
    this.columns = page.locator('#columns').locator('div[id*="column"]');
  }

  async goto(): Promise<void> {
    await this.goToHome();
    await this.getSideMenuLink('Drag and Drop').click();
  }

  getColumnId(columnName: string): Locator {
    return this.page.locator(`#column-${columnName.toLowerCase()}`);
  }
}