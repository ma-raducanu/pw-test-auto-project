import { Page, Locator } from '@playwright/test';
import { BasePage } from './basePage';

export class ElementsPage extends BasePage {
  readonly contentHeading: Locator;

  constructor(page: Page) {
    super(page);
    this.contentHeading = page.locator('div[id="content"] h3');
  }

  async goto(): Promise<void> {
    await this.goToHome();
    await this.getSideMenuLink('Add/Remove Elements').click();
  }

  getElementsPageButtons(buttonName: string): Locator {
    return this.page.getByRole('button', { name: buttonName });
  }
}