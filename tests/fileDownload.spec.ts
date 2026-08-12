import { test, expect } from '../fixtures/pages.fixture';

test.beforeEach(async ({ fileDownloadPage }) => {
  await fileDownloadPage.goto();
});

test('Page Title', async ({ fileDownloadPage }) => {
  await expect(fileDownloadPage.contentHeading).toHaveText('File Downloader');
});

test('Download Text File', async ({ fileDownloadPage }) => {
  const fileName = 'my test file.txt';
  const download = await fileDownloadPage.downloadFile(fileName);
  expect(download.suggestedFilename()).toBe(fileName);
  const contents = await fileDownloadPage.getDownloadContents(download);
  expect(contents).toBe('content');
});