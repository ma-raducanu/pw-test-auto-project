import { expect, test } from '../../2-fixtures/the-internet/page-fixtures';

test.beforeEach(async ({ elementPage }) => {
  await elementPage.goToElementPage();
});

test('Verify page title', async ({ elementPage }) => {
  await expect(elementPage.contentHeading).toHaveText('Add/Remove Elements');
});

test('Add an element', async ({ elementPage }) => {
  await elementPage.addElementButton.click();
  await expect(elementPage.deleteElementButton).toBeVisible();
});

test('Add multiple elements', async ({ elementPage }) => {
  for (let i = 0; i < 2; i++) {
    await elementPage.addElementButton.click();
  }
  await expect(elementPage.deleteElementButton).toHaveCount(2);
});

test('Delete an element', async ({ elementPage }) => {
  await elementPage.addElementButton.click();
  const deleteButton = elementPage.deleteElementButton;
  await deleteButton.click();
  await expect(deleteButton).not.toBeVisible();
});
