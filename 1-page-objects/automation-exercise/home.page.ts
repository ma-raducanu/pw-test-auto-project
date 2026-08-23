import type { Locator, Page } from '@playwright/test';
import { BasePage } from './base.page';

export class HomePage extends BasePage {

  constructor(page: Page) {
    super(page);
  }

  async goToHomePage(): Promise<void> {
    await this.goToPage('https://www.automationexercise.com/');
    await this.homeLink.click();
  }
}