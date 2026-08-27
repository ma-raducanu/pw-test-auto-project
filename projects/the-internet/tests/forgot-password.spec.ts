import { expect, test } from '../fixtures/page.fixtures';

test.beforeEach(async ({ forgotPasswordPage }) => {
  await forgotPasswordPage.goToPage('https://the-internet.herokuapp.com/');
  await forgotPasswordPage.goToPageLink('Forgot Password');
});

test('Verify page title', async ({ forgotPasswordPage }) => {
  await expect(forgotPasswordPage.contentHeading).toHaveText('Forgot Password');
});

test('Retrieve password', async ({ forgotPasswordPage }) => {
  await forgotPasswordPage.retrievePassword('test@test.com');
  await expect(forgotPasswordPage.confirmationMessage).toHaveText('Internal Server Error');
});