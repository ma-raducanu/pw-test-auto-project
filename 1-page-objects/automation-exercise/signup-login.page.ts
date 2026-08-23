import type { Locator, Page } from '@playwright/test';
import { createTestUser } from '../../0-utils/automation-exercise/test.data';
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
    this.signUpButton = this.page.getByRole('button', { name: 'Signup' });
    this.fullNameInput = this.page.locator('input[data-qa="signup-name"]');
    this.emailInput = this.page.locator('input[data-qa="signup-email"]');
    this.passwordInput = this.page.getByRole('textbox', { name: 'Password *' });
    this.firstNameInput = this.page.getByRole('textbox', { name: 'First name *' });
    this.lastNameInput = this.page.getByRole('textbox', { name: 'Last name *' });
    this.addressInput = this.page.getByRole('textbox', { name: 'Address *' });
    this.countrySelect = this.page.getByRole('combobox', { name: 'Country *' });
    this.stateInput = this.page.getByRole('textbox', { name: 'State *' });
    this.cityInput = this.page.getByRole('textbox', { name: 'City *' });
    this.zipCodeInput = this.page.locator('input#zipcode'); // BUG: The label for this input is "City".
    this.mobileNumberInput = this.page.getByRole('textbox', { name: 'Mobile Number *' });
    this.createAccountButton = this.page.getByRole('button', { name: 'Create Account' });
    this.continueButton = this.page.getByRole('link', { name: 'Continue' });
  }

  async goToLoginSignupPage(): Promise<void> {
    await this.goToPage('https://www.automationexercise.com/login');
    // await this.signupLoginLink.click();
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