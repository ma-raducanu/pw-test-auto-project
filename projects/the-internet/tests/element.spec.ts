import { expect, test } from '../fixtures/page.fixtures';

test.beforeEach(async ({ elementPage }) => {
  await elementPage.goToPage('https://the-internet.herokuapp.com/');
  await elementPage.goToPageLink('Add/Remove Elements');
});

test('Verify page title', async ({ elementPage }) => {
  await expect(elementPage.contentHeading).toHaveText('Add/Remove Elements');
});

test('Add an element', async ({ elementPage }) => {
  await elementPage.addElementButton.click();
  await expect(elementPage.deleteElementButton).toBeVisible();
});

test('Add multiple elements', async ({ elementPage }) => {
  await elementPage.addTwoElements();
  await expect(elementPage.deleteElementButton).toHaveCount(2);
});

test('Delete an element', async ({ elementPage }) => {
  await elementPage.addElementButton.click();
  const deleteButton = elementPage.deleteElementButton;
  await deleteButton.click();
  await expect(deleteButton).not.toBeVisible();
});
