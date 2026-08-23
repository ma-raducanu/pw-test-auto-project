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

  async goToElementPage(): Promise<void> {
    await this.goToPage('https://the-internet.herokuapp.com/');
    await this.goToPageLink('Add/Remove Elements');
  }

  async addTwoElements(): Promise<void> {
    for (let i = 0; i < 2; i++) {
      await this.addElementButton.click();
    }
  }
}