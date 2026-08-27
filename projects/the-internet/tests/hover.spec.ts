import { expect, test } from '../fixtures/page.fixtures';

test.beforeEach(async ({ hoverPage }) => {
  await hoverPage.goToPage('https://the-internet.herokuapp.com/');
  await hoverPage.goToPageLink('Hovers');
});

test('Verify page title', async ({ hoverPage }) => {
  await expect(hoverPage.contentHeading).toHaveText('Hovers');
});

test('Hover over the first figure', async ({ hoverPage }) => {
  await expect(hoverPage.figureCaption.first()).not.toBeVisible();
  await hoverPage.figure.first().hover();
  await expect(hoverPage.figureCaption.first()).toContainText('name: user1');
});

test('Hover over the second figure', async ({ hoverPage }) => {
  await expect(hoverPage.figureCaption.nth(1)).not.toBeVisible();
  await hoverPage.figure.nth(1).hover();
  await expect(hoverPage.figureCaption.nth(1)).toContainText('name: user2');
});

test('Hover over the third figure', async ({ hoverPage }) => {
  await expect(hoverPage.figureCaption.nth(2)).not.toBeVisible();
  await hoverPage.figure.nth(2).hover();
  await expect(hoverPage.figureCaption.nth(2)).toContainText('name: user3');
});

test('View user profile after hovering over the first figure', async ({ hoverPage }) => {
  await hoverPage.figure.first().hover();
  await hoverPage.figureViewProfileLink.click();
  await expect(hoverPage.page).toHaveURL('https://the-internet.herokuapp.com/users/1');
});

test.skip('View user profile after hovering over the second figure', {tag: '@Flaky'}, async ({ hoverPage }) => {
  await hoverPage.figure.nth(1).hover();
  await hoverPage.figureViewProfileLink.click();
  await expect(hoverPage.page).toHaveURL('https://the-internet.herokuapp.com/users/2');
});

test.skip('View user profile after hovering over the third figure', {tag: '@Flaky'}, async ({ hoverPage }) => {
  await hoverPage.figure.nth(2).hover();
  await hoverPage.figureViewProfileLink.click();
  await expect(hoverPage.page).toHaveURL('https://the-internet.herokuapp.com/users/3');
});