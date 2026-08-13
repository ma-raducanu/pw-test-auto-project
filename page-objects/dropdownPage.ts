import type { Locator, Page } from '@playwright/test';
import { BasePage } from './basePage';

export class DropdownListPage extends BasePage {
  readonly dropdown: Locator;
  readonly dropdownCheckedOption: Locator;
  readonly dropdownOption: Locator;

  constructor(page: Page) {
    super(page);
    this.dropdown = page.getByRole('combobox');
    this.dropdownCheckedOption = this.dropdown.locator('option:checked');
    this.dropdownOption = this.dropdown.locator('option');
  }

  async goto(): Promise<void> {
    await this.goToHome();
    await this.getSideMenuLink('Dropdown').click();
  }
}