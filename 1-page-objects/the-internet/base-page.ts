import type { Locator, Page } from '@playwright/test';

export class BasePage {
  protected readonly page: Page;
  readonly contentHeading: Locator;
  readonly content: Locator;

  constructor(page: Page) {
    this.page = page;
    this.content = page.locator('#content');
    this.contentHeading =
      this.content.locator('h2').or(
      this.content.locator('h3'));
  }

  async goToHomePage(): Promise<void> {
    await this.page.goto('https://the-internet.herokuapp.com/');
  }

  async goToPageLink(pageLinkName: string): Promise<void> {
    await this.page.getByRole('link', { name: pageLinkName }).first().click();
  }
}