import { expect, test } from '../../fixtures/the-internet/pages.fixture';

test.beforeEach(async ({ dragAndDropPage }) => {
  await dragAndDropPage.goto();
});

test('Verify page title', async ({ dragAndDropPage }) => {
  await expect(dragAndDropPage.contentHeading).toHaveText('Drag and Drop');
});

test('Drag and drop', async ({ dragAndDropPage }) => {
  await dragAndDropPage.getColumnId('A').dragTo(dragAndDropPage.getColumnId('B'));
  await expect(dragAndDropPage.columns).toHaveText(['B', 'A']);
});