import type { Locator, Page } from '@playwright/test';
import { BasePage } from './basePage';

export class LoginPage extends BasePage {
  readonly flashMessage: Locator;
  readonly logInButton: Locator;
  readonly logOutButton: Locator;
  readonly passwordInput: Locator;
  readonly usernameInput: Locator;

  constructor(page: Page) {
    super(page);
    this.flashMessage = page.locator('#flash');
    this.logInButton = page.getByRole('button', { name: 'Login' });
    this.logOutButton = page.getByRole('link', { name: 'Logout' });
    this.passwordInput = page.getByRole('textbox', { name: 'Password' });
    this.usernameInput = page.getByRole('textbox', { name: 'Username' });
  }

  async goto(): Promise<void> {
    await this.goToHome();
    await this.getSideMenuLink('Form Authentication').click();
  }

  async logIn(username: string, password: string): Promise<void> {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.logInButton.click();
  }
}