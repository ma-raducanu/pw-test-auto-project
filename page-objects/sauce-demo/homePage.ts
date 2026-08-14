import type { Locator, Page } from '@playwright/test';

export class HomePage {
  protected readonly page: Page;
  readonly myAccountLink: Locator;
  readonly yourAccountSection: Locator;

  constructor(page: Page) {
    this.page = page;
    this.myAccountLink = this.page.getByRole('link', { name: 'My Account' });
    this.yourAccountSection = this.page.getByRole('heading', { name: 'Your Account' });
  }

  async goToHome(): Promise<void> {
    await this.page.goto('https://sauce-demo.myshopify.com/');
  }
}