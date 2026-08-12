import type { Download, Locator, Page } from '@playwright/test';
import { BasePage } from './basePage';
import fs from 'fs';
import sizeOf from 'image-size';

export class FileDownloadPage extends BasePage {

  constructor(page: Page) {
    super(page);
  }

  async downloadFile(fileName: string): Promise<Download> {
    const downloadPromise = this.page.waitForEvent('download');
    await this.getLinkByFileName(fileName).click();
    return downloadPromise;
  }

  async getDownloadContents(download: Download): Promise<string> {
    const filePath = await this.getDownloadedFilePath(download);
    return fs.readFileSync(filePath, 'utf-8');
  }

  async getDownloadSize(download: Download): Promise<number> {
    const filePath = await this.getDownloadedFilePath(download);
    const stats = fs.statSync(filePath);
    return stats.size;
  }

  async getImageSize(download: Download): Promise<{ width: number; height: number; type: string }> {
    const filePath = await this.getDownloadedFilePath(download);
    const imageBuffer = fs.readFileSync(filePath);
    const dimensions = sizeOf(imageBuffer);
    if (!dimensions.width || !dimensions.height || !dimensions.type) {
      throw new Error('Could not determine image dimensions');
    }
    return { width: dimensions.width, height: dimensions.height, type: dimensions.type };
  }

  async goto(): Promise<void> {
    await this.goToHome();
    await this.getSideMenuLink('File Download').first().click();
  }

  private async getDownloadedFilePath(download: Download): Promise<string> {
    const filePath = await download.path();
    if (!filePath) {
      throw new Error('Downloaded file path is not available');
    }
    return filePath;
  }

  getLinkByFileName(fileName: string): Locator {
    return this.page.getByRole('link', { name: fileName });
  }
}