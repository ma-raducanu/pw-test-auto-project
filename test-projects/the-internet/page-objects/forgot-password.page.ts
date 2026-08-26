import type { Locator, Page } from '@playwright/test';
import { BasePage } from './base.page';

export class ForgotPasswordPage extends BasePage {
  readonly confirmationMessage: Locator;
  readonly emailInput: Locator;
  readonly retrievePasswordButton: Locator;

  constructor(page: Page) {
    super(page);
    this.confirmationMessage = page.locator('body').locator('h1');
    this.emailInput = page.getByRole('textbox', { name: 'E-mail' });
    this.retrievePasswordButton = page.getByRole('button', { name: 'Retrieve Password' });
  }

  async retrievePassword(email: string): Promise<void> {
    await this.emailInput.fill(email);
    await this.retrievePasswordButton.click();
  }
}