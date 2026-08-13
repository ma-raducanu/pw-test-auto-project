import { expect, test } from '../fixtures/pages.fixture';

test.beforeEach(async ({ dropdownListPage }) => {
  await dropdownListPage.goto();
});

test('Verify page title', async ({ dropdownListPage }) => {
  await expect(dropdownListPage.contentHeading).toHaveText('Dropdown List');
});

test('Select the first option from the dropdown', async ({ dropdownListPage }) => {
  const firstOptionText = await dropdownListPage.dropdownOption.nth(1).textContent();
  expect(firstOptionText).not.toBeNull();
  const dropdownField = dropdownListPage.dropdown;
  await dropdownField.selectOption({ index: 1 });
  await expect(dropdownField.locator('option:checked')).toHaveText(firstOptionText!);
});

test('Select a specific option from the dropdown', async ({ dropdownListPage }) => {
  const dropdownField = dropdownListPage.dropdown;
  await dropdownField.selectOption({ label: 'Option 2' });
  await expect(dropdownField.locator('option:checked')).toHaveText('Option 2');
});