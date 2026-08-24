import type { Locator, Page } from '@playwright/test';
import { BasePage } from './base.page';

export class HoverPage extends BasePage {
  readonly figure: Locator;
  readonly figureCaption: Locator;
  readonly figureViewProfileLink: Locator;

  constructor(page: Page) {
    super(page);
    this.figure = page.locator('.figure');
    this.figureCaption = this.figure.locator('.figcaption');
    this.figureViewProfileLink = this.figureCaption.getByRole('link', { name: 'View profile' });
  }

  async goToHoverPage(): Promise<void> {
    await this.goToPage('https://the-internet.herokuapp.com/');
    await this.goToPageLink('Hovers');
  }
}