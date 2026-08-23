import type { Locator, Page } from '@playwright/test';
import { BasePage } from './base.page';

export class InputPage extends BasePage {
  readonly numberInput: Locator;

  constructor(page: Page) {
    super(page);
    this.numberInput = page.getByRole('spinbutton');
  }

  async goToInputPage(): Promise<void> {
    await this.goToPage('https://the-internet.herokuapp.com/');
    await this.goToPageLink('Inputs');
  }

  async increaseNumberInputValue(increment: number): Promise<void> {
    for (let i = 0; i < increment; i++) {
      await this.numberInput.press('ArrowUp');
    }
  }

  async decreaseNumberInputValue(decrement: number): Promise<void> {
    for (let i = 0; i < decrement; i++) {
      await this.numberInput.press('ArrowDown');
    }
  }
}