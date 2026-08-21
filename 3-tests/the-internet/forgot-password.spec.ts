import { expect, test } from '../../2-fixtures/the-internet/page-fixtures';

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