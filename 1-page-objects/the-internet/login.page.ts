import type { Locator, Page } from '@playwright/test';
import { BasePage } from './base.page';

export class LoginPage extends BasePage {
  readonly flashMessage: Locator;
  readonly logInButton: Locator;
  readonly logOutLink: Locator;
  readonly passwordInput: Locator;
  readonly usernameInput: Locator;

  constructor(page: Page) {
    super(page);
    this.flashMessage = page.locator('#flash');
    this.logInButton = page.getByRole('button', { name: 'Login' });
    this.logOutLink = page.getByRole('link', { name: 'Logout' });
    this.passwordInput = page.getByRole('textbox', { name: 'Password' });
    this.usernameInput = page.getByRole('textbox', { name: 'Username' });
  }

  async goToLoginPage(): Promise<void> {
    await this.goToHomePage();
    await this.goToPageLink('Form Authentication');
  }

  async logIn(username: string, password: string): Promise<void> {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.logInButton.click();
  }
}