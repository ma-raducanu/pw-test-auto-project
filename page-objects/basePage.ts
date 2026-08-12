import { Page, Locator } from '@playwright/test';

export class BasePage {
  protected readonly page: Page;
  readonly contentHeading: Locator;

  constructor(page: Page) {
    this.page = page;
    const contentLocator = page.locator('#content');
    this.contentHeading =
      contentLocator.locator('h2').or(
      contentLocator.locator('h3'));
  }

  async goToHome(): Promise<void> {
    await this.page.goto('https://the-internet.herokuapp.com/');
  }

  getSideMenuLink(linkName: string): Locator {
    return this.page.getByRole('link', { name: linkName });
  }
}