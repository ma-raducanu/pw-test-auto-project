import { expect, test } from '../fixtures/pages.fixture';

test.beforeEach(async ({ forgotPasswordPage }) => {
  await forgotPasswordPage.goto();
});

test('Page Title', async ({ forgotPasswordPage }) => {
  await expect(forgotPasswordPage.contentHeading).toHaveText('Forgot Password');
});

test('Retrieve Password', async ({ forgotPasswordPage }) => {
  await forgotPasswordPage.retrievePassword('test@test.com');
  await expect(forgotPasswordPage.confirmationMessage).toContainText('Internal Server Error');
});