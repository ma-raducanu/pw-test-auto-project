import type { Locator, Page } from '@playwright/test';
import { BasePage } from './basePage';

export class ElementPage extends BasePage {
  readonly addElementButton: Locator;
  readonly deleteElementButton: Locator;

  constructor(page: Page) {
    super(page);
    this.addElementButton = this.page.getByRole('button', { name: 'Add Element' });
    this.deleteElementButton = this.page.getByRole('button', { name: 'Delete' });
  }

  async goto(): Promise<void> {
    await this.goToHome();
    await this.getSideMenuLink('Add/Remove Elements').click();
  }
}