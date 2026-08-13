import { expect, test } from '../../fixtures/the-internet/pages.fixture';

test.beforeEach(async ({ forgotPasswordPage }) => {
  await forgotPasswordPage.goto();
});

test('Verify page title', async ({ forgotPasswordPage }) => {
  await expect(forgotPasswordPage.contentHeading).toHaveText('Forgot Password');
});

test('Retrieve password', async ({ forgotPasswordPage }) => {
  await forgotPasswordPage.retrievePassword('test@test.com');
  await expect(forgotPasswordPage.confirmationMessage).toContainText('Internal Server Error');
});