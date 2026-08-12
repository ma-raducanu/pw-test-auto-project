import { test, expect } from '../fixtures/pages.fixture';

test.beforeEach(async ({ loginPage }) => {
  await loginPage.goto();
});

test('Page Title', async ({ loginPage }) => {
  await expect(loginPage.contentHeading).toHaveText('Login Page');
});

test('Log In', async ({ loginPage }) => {
  await loginPage.login(process.env.TEST_USERNAME!, process.env.TEST_PASSWORD!);
  await expect(loginPage.contentHeading).toHaveText('Secure Area');
});