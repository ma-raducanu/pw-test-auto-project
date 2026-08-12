import { Page, Locator } from '@playwright/test';
import { BasePage } from './basePage';

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

  async goto(): Promise<void> {
    await this.goToHome();
    await this.getSideMenuLink('Forgot Password').click();
  }

  async retrievePassword(email: string): Promise<void> {
    await this.emailInput.fill(email);
    await this.retrievePasswordButton.click();
  }
}