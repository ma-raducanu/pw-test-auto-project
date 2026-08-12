import { test, expect } from '../fixtures/pages.fixture';

test.beforeEach(async ({ elementsPage }) => {
  await elementsPage.goto();
});

test('Page Title', async ({ elementsPage }) => {
  await expect(elementsPage.contentHeading).toHaveText('Add/Remove Elements');
});

test('Add Element', async ({ elementsPage }) => {
  await elementsPage.getElementsPageButton('Add Element').click();
  await expect(elementsPage.getElementsPageButton('Delete')).toBeVisible();
});

test('Add Multiple Elements', async ({ elementsPage }) => {
  for (let i = 0; i < 2; i++) {
    await elementsPage.getElementsPageButton('Add Element').click();
  }
  await expect(elementsPage.getElementsPageButton('Delete')).toHaveCount(2);
});

test('Delete Element', async ({ elementsPage }) => {
  await elementsPage.getElementsPageButton('Add Element').click();
  const deleteButton = elementsPage.getElementsPageButton('Delete');
  await deleteButton.click();
  await expect(deleteButton).not.toBeVisible();
});
