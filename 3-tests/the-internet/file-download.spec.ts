import { expect, test } from '../../2-fixtures/the-internet/page.fixtures';

test.beforeEach(async ({ fileDownloadPage }) => {
  await fileDownloadPage.goToFileDownloadPage();
});

test('Verify page title', async ({ fileDownloadPage }) => {
  await expect(fileDownloadPage.contentHeading).toHaveText('File Downloader');
});

test('Download any text file', async ({ fileDownloadPage }) => {
  const link = fileDownloadPage.getFirstTextFileLink();
  const download = await fileDownloadPage.downloadFromLink(link);
  expect(download.suggestedFilename()).toMatch(/\.txt$/i);
  expect(await fileDownloadPage.getDownloadSize(download)).toBeGreaterThan(-1);
  const contents = await fileDownloadPage.getDownloadContents(download);
  expect(contents.length).toBeGreaterThan(-1);
});

test.skip('Download any image file', {tag: '@Dynamic'}, async ({ fileDownloadPage }) => {
  const link = fileDownloadPage.getFirstImageFileLink();
  const download = await fileDownloadPage.downloadFromLink(link);
  expect(download.suggestedFilename()).toMatch(/\.(jpg|jpeg|png|gif)$/i);
  expect(await fileDownloadPage.getDownloadSize(download)).toBeGreaterThan(-1);
});

test.skip('Download a specific image file', {tag: '@Dynamic'}, async ({ fileDownloadPage }) => {
  const fileName = 'cognizant.png';
  const download = await fileDownloadPage.downloadFile(fileName);
  expect(download.suggestedFilename()).toBe(fileName);
  expect(await fileDownloadPage.getDownloadSize(download)).toBeGreaterThan(0);
  const image = await fileDownloadPage.getImageSize(download);
  expect(image.type).toBe('png');
  expect(image.width).toBe(271);
  expect(image.height).toBe(186);
});

test.skip('Download a specific text file', {tag: '@Dynamic'}, async ({ fileDownloadPage }) => {
  const fileName = 'my test file.txt';
  const download = await fileDownloadPage.downloadFile(fileName);
  expect(download.suggestedFilename()).toBe(fileName);
  expect(await fileDownloadPage.getDownloadSize(download)).toBeGreaterThan(0);
  const contents = await fileDownloadPage.getDownloadContents(download);
  expect(contents).toBe('content');
});