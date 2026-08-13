import { expect, test } from '../../fixtures/the-internet/pages.fixture';

test.beforeEach(async ({ checkboxPage }) => {
  await checkboxPage.goto();
});

test('Verify page title', async ({ checkboxPage }) => {
  await expect(checkboxPage.contentHeading).toHaveText('Checkboxes');
});

test('Check the first checkbox', async ({ checkboxPage }) => {
  await checkboxPage.checkbox1.check();
  await expect(checkboxPage.checkbox1).toBeChecked();
});

test('Uncheck the second checkbox', async ({ checkboxPage }) => {
  await checkboxPage.checkbox2.uncheck();
  await expect(checkboxPage.checkbox2).not.toBeChecked();
});