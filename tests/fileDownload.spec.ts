import { test, expect } from '../fixtures/pages.fixture';

test.beforeEach(async ({ fileDownloadPage }) => {
  await fileDownloadPage.goto();
});

test('Page Title', async ({ fileDownloadPage }) => {
  await expect(fileDownloadPage.contentHeading).toHaveText('File Downloader');
});

test('Download Image File', async ({ fileDownloadPage }) => {
  const fileName = 'cognizant.png';
  const download = await fileDownloadPage.downloadFile(fileName);
  expect(download.suggestedFilename()).toBe(fileName);
  expect(await fileDownloadPage.getDownloadSize(download)).toBeGreaterThan(0);
  const image = await fileDownloadPage.getImageSize(download);
  expect(image.type).toBe('png');
  expect(image.width).toBe(271);
  expect(image.height).toBe(186);
});

test('Download Text File', async ({ fileDownloadPage }) => {
  const fileName = 'my test file.txt';
  const download = await fileDownloadPage.downloadFile(fileName);
  expect(download.suggestedFilename()).toBe(fileName);
  expect(await fileDownloadPage.getDownloadSize(download)).toBeGreaterThan(0);
  const contents = await fileDownloadPage.getDownloadContents(download);
  expect(contents).toBe('content');
});