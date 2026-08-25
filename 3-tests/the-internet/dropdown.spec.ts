import { expect, test } from '../../2-fixtures/the-internet/page.fixtures';

test.beforeEach(async ({ dropdownListPage }) => {
  await dropdownListPage.goToDropdownPage();
});

test('Verify page title', async ({ dropdownListPage }) => {
  await expect(dropdownListPage.contentHeading).toHaveText('Dropdown List');
});

test('Select the first option from the dropdown', async ({ dropdownListPage }) => {
  const firstOptionText = await dropdownListPage.dropdownOption.nth(1).textContent();
  await dropdownListPage.dropdown.selectOption({ label: 'Option 1' });
  await expect(dropdownListPage.dropdownOption.nth(1)).toHaveAttribute('selected', 'selected');
  await expect(dropdownListPage.dropdownOption.nth(1)).toHaveText(firstOptionText!);
});

test('Select a specific option from the dropdown', async ({ dropdownListPage }) => {
  const secondOptionText = await dropdownListPage.dropdownOption.nth(2).textContent();
  await dropdownListPage.dropdown.selectOption({ label: 'Option 2' });
  await expect(dropdownListPage.dropdownOption.nth(2)).toHaveAttribute('selected', 'selected');
  await expect(dropdownListPage.dropdownOption.nth(2)).toHaveText(secondOptionText!);
});