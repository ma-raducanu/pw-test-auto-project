import { type Locator, type Page, expect } from '@playwright/test';

export class BasePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }
  
  async goToHome(): Promise<void> {
    await this.page.goto('https://www.automationexercise.com/');
  }
}