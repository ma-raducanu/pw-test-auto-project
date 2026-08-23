import type { Locator, FrameLocator, Page } from '@playwright/test';

export class BasePage {
  readonly page: Page;
  readonly consentButton: Locator;
  readonly homeLink: Locator;
  readonly signupLoginLink: Locator;
  readonly deleteAccountLink: Locator;
  readonly confirmationHeader: Locator;
  readonly adFrame: FrameLocator;
  readonly adFrameCloseButton: Locator;
  
  constructor(page: Page) {
    this.page = page;
    this.consentButton = page.getByRole('button', { name: 'Consent' });
    this.homeLink = page.getByRole('link', { name: 'Home' });
    this.signupLoginLink = page.getByRole('link', { name: 'Signup / Login' });
    this.deleteAccountLink = page.getByRole('link', { name: 'Delete Account' });
    this.confirmationHeader = page.locator('h2.title.text-center');
    this.adFrame = page.frameLocator('iFrame[id="aswift_1"]');
    this.adFrameCloseButton = this.adFrame.locator('#dismiss-button');
  }
  
  async goToPage(url: string): Promise<void> {
    await this.page.goto(url);
    await this.consentToCookies();
  }

  async consentToCookies(): Promise<void> {
    if (await this.consentButton.isVisible()) {
      await this.consentButton.click();
    }
  }

  async closeAdFrame(): Promise<void> {
    if (await this.adFrameCloseButton.isVisible()) {
      await this.adFrameCloseButton.click();
    }
  }
}