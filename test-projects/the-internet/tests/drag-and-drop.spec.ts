import { expect, test } from '../fixtures/page.fixtures';

test.beforeEach(async ({ dragAndDropPage }) => {
  await dragAndDropPage.goToPage('https://the-internet.herokuapp.com/');
  await dragAndDropPage.goToPageLink('Drag and Drop');
});

test('Verify page title', async ({ dragAndDropPage }) => {
  await expect(dragAndDropPage.contentHeading).toHaveText('Drag and Drop');
});

test('Drag and drop', async ({ dragAndDropPage }) => {
  await dragAndDropPage.columnA.dragTo(dragAndDropPage.columnB);
  await expect(dragAndDropPage.columns).toHaveText(['B', 'A']);
});

test('Drag and drop and repeat', async ({ dragAndDropPage }) => {
  await dragAndDropPage.columnA.dragTo(dragAndDropPage.columnB);
  await dragAndDropPage.columnB.dragTo(dragAndDropPage.columnA);
  await expect(dragAndDropPage.columns).toHaveText(['A', 'B']);
});