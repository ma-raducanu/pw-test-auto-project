import { Page, Locator, Download } from '@playwright/test';
import { BasePage } from './basePage';
import fs from 'fs';

export class FileDownloadPage extends BasePage {

  constructor(page: Page) {
    super(page);
  }

  async goto(): Promise<void> {
    await this.goToHome();
    await this.getSideMenuLink('File Download').first().click();
  }

  async downloadFile(fileName: string): Promise<Download> {
    const downloadPromise = this.page.waitForEvent('download');
    await this.getLinkByFileName(fileName).click();
    return downloadPromise;
  }

  async getDownloadContents(download: Download): Promise<string> {
    const filePath = await download.path();
    return fs.readFileSync(filePath!, 'utf-8');
  }

  getLinkByFileName(fileName: string): Locator {
    return this.page.getByRole('link', { name: fileName });
  }
}