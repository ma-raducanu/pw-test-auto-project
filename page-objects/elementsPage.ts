import { Page, Locator } from '@playwright/test';
import { BasePage } from './basePage';

export class ElementsPage extends BasePage {

  constructor(page: Page) {
    super(page);

  }

  async goto(): Promise<void> {
    await this.goToHome();
    await this.getSideMenuLink('Add/Remove Elements').click();
  }

  getElementsPageButton(buttonName: string): Locator {
    return this.page.getByRole('button', { name: buttonName });
  }
}