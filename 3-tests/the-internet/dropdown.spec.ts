import { expect, test } from '../../2-fixtures/the-internet/page.fixtures';

test.beforeEach(async ({ dropdownListPage }) => {
  await dropdownListPage.goToDropdownPage();
});

test('Verify page title', async ({ dropdownListPage }) => {
  await expect(dropdownListPage.contentHeading).toHaveText('Dropdown List');
});

test('Select the first option from the dropdown', async ({ dropdownListPage }) => {
  await dropdownListPage.dropdown.selectOption({ index: 1 });
  await expect(dropdownListPage.dropdownOption.filter({hasText: 'Option 1'})).toBeVisible();
});

test('Select a specific option from the dropdown', async ({ dropdownListPage }) => {
  await dropdownListPage.dropdown.selectOption({ label: 'Option 2' });
  await expect(dropdownListPage.dropdownOption.nth(2)).toHaveAttribute('selected', 'selected');
  await expect(dropdownListPage.dropdownOption.nth(2)).toHaveText('Option 2');
});