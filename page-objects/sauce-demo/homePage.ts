import type { Locator, Page } from '@playwright/test';

export class HomePage {
  protected readonly page: Page;
  readonly signUpButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.signUpButton = this.page.getByRole('link', { name: 'Sign Up' });
  }

  async goToHome(): Promise<void> {
    await this.page.goto('https://sauce-demo.myshopify.com/');
  }
}