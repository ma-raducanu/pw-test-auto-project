import { test, expect } from '../fixtures/pages.fixture';

test.beforeEach(async ({ checkboxPage }) => {
  await checkboxPage.goto();
});

test('Page Title', async ({ checkboxPage }) => {
  await expect(checkboxPage.contentHeading).toHaveText('Checkboxes');
});

test('Check Box', async ({ checkboxPage }) => {
  await checkboxPage.checkbox1.check();
  await expect(checkboxPage.checkbox1).toBeChecked();
});

test('Uncheck Box', async ({ checkboxPage }) => {
  await checkboxPage.checkbox2.uncheck();
  await expect(checkboxPage.checkbox2).not.toBeChecked();
});