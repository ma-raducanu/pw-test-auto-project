import { test, expect } from '../fixtures/pages.fixture';

test.beforeEach(async ({ elementsPage }) => {
  await elementsPage.goto();
});

test('Page Title', async ({ elementsPage }) => {
  await expect(elementsPage.contentHeading).toHaveText('Add/Remove Elements');
});

test('Add Element', async ({ elementsPage }) => {
  await elementsPage.getElementsPageButtons('Add Element').click();
  await expect(elementsPage.getElementsPageButtons('Delete')).toBeVisible();
  await expect(elementsPage.getElementsPageButtons('Delete')).toHaveCount(1);
});

test('Delete Element', async ({ elementsPage }) => {
  await elementsPage.getElementsPageButtons('Add Element').click();
  await elementsPage.getElementsPageButtons('Delete').click();
  await expect(elementsPage.getElementsPageButtons('Delete')).not.toBeVisible();
});
