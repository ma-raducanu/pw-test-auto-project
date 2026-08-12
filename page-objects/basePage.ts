import { Page, Locator } from '@playwright/test';

export class BasePage {
  protected readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goToHome(): Promise<void> {
    await this.page.goto('https://the-internet.herokuapp.com/');
  }

  getSideMenuLink(buttonName: string): Locator {
    return this.page.getByRole('link', { name: buttonName });
  }
}