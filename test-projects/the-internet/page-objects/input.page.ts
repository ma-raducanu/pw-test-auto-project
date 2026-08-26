import type { Locator, Page } from '@playwright/test';
import { BasePage } from './base.page';

export class InputPage extends BasePage {
  readonly numberInput: Locator;

  constructor(page: Page) {
    super(page);
    this.numberInput = page.getByRole('spinbutton');
  }

  async changeNumberInputValue(amount: number): Promise<void> {
    const key = amount >= 0 ? 'ArrowUp' : 'ArrowDown';
    for (let i = 0; i < Math.abs(amount); i++) {
      await this.numberInput.press(key);
    }
  }
}