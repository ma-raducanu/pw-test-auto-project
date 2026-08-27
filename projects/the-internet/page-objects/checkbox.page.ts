import type { Locator, Page } from '@playwright/test';
import { BasePage } from './base.page';

export class CheckboxPage extends BasePage {
  readonly checkbox1: Locator;
  readonly checkbox2: Locator;

  constructor(page: Page) {
    super(page);
    this.checkbox1 = page.getByRole('checkbox').first();
    this.checkbox2 = page.getByRole('checkbox').nth(1);
  }
}