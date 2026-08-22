import { expect, test } from '../../2-fixtures/the-internet/page.fixtures';

test.beforeEach(async ({ checkboxPage }) => {
  await checkboxPage.goToCheckboxesPage();
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