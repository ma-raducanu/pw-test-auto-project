import type { Locator, Page } from '@playwright/test';
import { BasePage } from './base-page';

export class DragAndDropPage extends BasePage {
  readonly columns: Locator;

  constructor(page: Page) {
    super(page);
    this.columns = page.locator('#columns').locator('div[id*="column"]');
  }

  async goToDragAndDropPage(): Promise<void> {
    await this.goToHomePage();
    await this.goToPageLink('Drag and Drop');
  }

  getColumnId(columnName: string): Locator {
    return this.page.locator(`#column-${columnName.toLowerCase()}`);
  }
}