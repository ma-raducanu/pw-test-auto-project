import { expect, test } from '../fixtures/pages.fixture';

test.beforeEach(async ({ elementPage }) => {
  await elementPage.goto();
});

test('Verify page title', async ({ elementPage }) => {
  await expect(elementPage.contentHeading).toHaveText('Add/Remove Elements');
});

test('Add an element', async ({ elementPage }) => {
  await elementPage.getElementPageButton('Add Element').click();
  await expect(elementPage.getElementPageButton('Delete')).toBeVisible();
});

test('Add multiple elements', async ({ elementPage }) => {
  for (let i = 0; i < 2; i++) {
    await elementPage.getElementPageButton('Add Element').click();
  }
  await expect(elementPage.getElementPageButton('Delete')).toHaveCount(2);
});

test('Delete an element', async ({ elementPage }) => {
  await elementPage.getElementPageButton('Add Element').click();
  const deleteButton = elementPage.getElementPageButton('Delete');
  await deleteButton.click();
  await expect(deleteButton).not.toBeVisible();
});
