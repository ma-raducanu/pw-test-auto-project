import type { Locator, Page } from '@playwright/test';
import { BasePage } from './base-page';

export class HomePage extends BasePage {
  readonly signupLoginLink: Locator;

  constructor(page: Page) {
    super(page);
    this.signupLoginLink = this.page.getByRole('link', { name: 'Signup / Login' });
  }
}