import { type Locator, type Page, expect } from '@playwright/test';

export class BasePage {
  readonly page: Page;
  readonly consentButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.consentButton = this.page.getByRole('button', { name: 'Consent' });
  }
  
  async goToHome(): Promise<void> {
    await this.page.goto('https://www.automationexercise.com/');
  }
}