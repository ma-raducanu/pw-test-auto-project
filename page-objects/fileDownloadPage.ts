import { Page, Locator, Download } from '@playwright/test';
import { BasePage } from './basePage';
import fs from 'fs';
import sizeOf from 'image-size';

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

  async getDownloadSize(download: Download): Promise<number> {
    const filePath = await download.path();
    if (!filePath) {
      throw new Error('Downloaded file path is not available');
    }
    const stats = fs.statSync(filePath);
    return stats.size;
  }

  async getImageSize(download: Download) {
    const filePath = await download.path();
    if (!filePath) {
      throw new Error('Downloaded file path is not available');
    }
    const imageBuffer = fs.readFileSync(filePath);
    return sizeOf(imageBuffer);
  }

  getLinkByFileName(fileName: string): Locator {
    return this.page.getByRole('link', { name: fileName });
  }
}