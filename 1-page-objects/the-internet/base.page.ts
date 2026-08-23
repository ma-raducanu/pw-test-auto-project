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

  async goToCheckboxesPage(): Promise<void> {
    await this.goToHomePage();
    await this.goToPageLink('Checkboxes');
  }

  async goToDragAndDropPage(): Promise<void> {
    await this.goToHomePage();
    await this.goToPageLink('Drag and Drop');
  }

  async goToDropdownPage(): Promise<void> {
    await this.goToHomePage();
    await this.goToPageLink('Dropdown');
  }

  async goToElementPage(): Promise<void> {
    await this.goToHomePage();
    await this.goToPageLink('Add/Remove Elements');
  }

  async goToFileDownloadPage(): Promise<void> {
    await this.goToHomePage();
    await this.goToPageLink('File Download');
  }

  async goToForgotPasswordPage(): Promise<void> {
    await this.goToHomePage();
    await this.goToPageLink('Forgot Password');
  }

  async goToLoginPage(): Promise<void> {
    await this.goToHomePage();
    await this.goToPageLink('Form Authentication');
  }
}