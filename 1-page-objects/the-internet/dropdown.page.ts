import type { Locator, Page } from '@playwright/test';
import { BasePage } from './base.page';

export class DropdownListPage extends BasePage {
  readonly dropdown: Locator;
  readonly dropdownOption: Locator;
  readonly dropdownSelectedOption: Locator;

  constructor(page: Page) {
    super(page);
    this.dropdown = page.getByRole('combobox');
    this.dropdownOption = this.dropdown.locator('option');
    this.dropdownSelectedOption = this.dropdown.locator('option[selected="selected"]');
  }

  async goToDropdownPage(): Promise<void> {
    await this.goToPage('https://the-internet.herokuapp.com/');
    await this.goToPageLink('Dropdown');
  }
}