import type { Locator, Page } from '@playwright/test';
import { createTestUser } from '../utils/test.data';
import { BasePage } from './base.page';

export class SignupLoginPage extends BasePage {
  readonly signUpButton: Locator;
  readonly fullNameInput: Locator;
  readonly emailInput: Locator;
  readonly passwordInput: Locator;
  readonly firstNameInput: Locator;
  readonly lastNameInput: Locator;
  readonly addressInput: Locator;
  readonly countrySelect: Locator;
  readonly stateInput: Locator;
  readonly cityInput: Locator;
  readonly zipCodeInput: Locator;
  readonly mobileNumberInput: Locator;
  readonly createAccountButton: Locator;
  readonly continueButton: Locator;

  constructor(page: Page) {
    super(page);
    this.signUpButton = page.getByRole('button', { name: 'Signup' });
    this.fullNameInput = page.locator('input[data-qa="signup-name"]');
    this.emailInput = page.locator('input[data-qa="signup-email"]');
    this.passwordInput = page.getByRole('textbox', { name: 'Password *' });
    this.firstNameInput = page.getByRole('textbox', { name: 'First name *' });
    this.lastNameInput = page.getByRole('textbox', { name: 'Last name *' });
    this.addressInput = page.getByRole('textbox', { name: 'Address *' });
    this.countrySelect = page.getByRole('combobox', { name: 'Country *' });
    this.stateInput = page.getByRole('textbox', { name: 'State *' });
    this.cityInput = page.getByRole('textbox', { name: 'City *' });
    this.zipCodeInput = page.locator('input#zipcode'); // BUG: The label for this input is "City".
    this.mobileNumberInput = page.getByRole('textbox', { name: 'Mobile Number *' });
    this.createAccountButton = page.getByRole('button', { name: 'Create Account' });
    this.continueButton = page.getByRole('link', { name: 'Continue' });
  }

  async goToLoginSignupPage(): Promise<void> {
    await this.goToPage('https://www.automationexercise.com/login');
  }

  async registerNewUser(): Promise<void> {
    const testUser = createTestUser();
    await this.fullNameInput.fill(`${testUser.firstName} ${testUser.lastName}`);
    const firstName = testUser.firstName;
    const lastName = testUser.lastName;
    await this.emailInput.fill(testUser.email);
    await this.signUpButton.click();
    await this.passwordInput.fill(testUser.password);
    await this.firstNameInput.fill(firstName);
    await this.lastNameInput.fill(lastName);
    await this.addressInput.fill(testUser.address);
    await this.countrySelect.selectOption({ label: 'United States' });
    await this.stateInput.fill(testUser.state);
    await this.cityInput.fill(testUser.city);
    await this.zipCodeInput.fill(testUser.zip);
    await this.mobileNumberInput.fill(testUser.phone);
    await this.createAccountButton.click();
  }
}