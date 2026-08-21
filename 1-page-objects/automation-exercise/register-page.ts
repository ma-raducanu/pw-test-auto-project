import type { Locator, Page } from '@playwright/test';
import { BasePage } from './base-page';

export class RegisterPage extends BasePage {
  readonly signUpButton: Locator;
  readonly firstNameInput: Locator;
  readonly lastNameInput: Locator;
  readonly emailInput: Locator;
  readonly passwordInput: Locator;
  readonly createButton: Locator;

  constructor(page: Page) {
    super(page);
    this.signUpButton = this.page.getByRole('link', { name: 'Sign Up' });
    this.firstNameInput = this.page.locator('input#first_name');
    this.lastNameInput = this.page.locator('input#last_name');
    this.emailInput = this.page.locator('input#email');
    this.passwordInput = this.page.locator('input#password');
    this.createButton = this.page.getByRole('button', {name: 'Create'});
  }

  async fillInRegistrationForm(firstName: string, lastName: string, email: string, password: string): Promise<void> {
    await this.firstNameInput.fill(firstName);
    await this.lastNameInput.fill(lastName);
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
  }
}