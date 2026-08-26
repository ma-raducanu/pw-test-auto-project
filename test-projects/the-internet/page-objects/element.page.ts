import type { Locator, Page } from '@playwright/test';
import { BasePage } from './base.page';

export class ElementPage extends BasePage {
  readonly addElementButton: Locator;
  readonly deleteElementButton: Locator;

  constructor(page: Page) {
    super(page);
    this.addElementButton = page.getByRole('button', { name: 'Add Element' });
    this.deleteElementButton = page.getByRole('button', { name: 'Delete' });
  }

  async addTwoElements(): Promise<void> {
    for (let i = 0; i < 2; i++) {
      await this.addElementButton.click();
    }
  }
}