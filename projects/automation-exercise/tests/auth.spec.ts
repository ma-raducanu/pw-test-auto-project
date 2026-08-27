import { expect, test } from '../fixtures/page.fixtures';

test.beforeEach(async ({ signupLoginPage }) => {
  await signupLoginPage.goToLoginSignupPage();
});

test('Navigate to the Login page', async ({ signupLoginPage }) => {
  await expect(signupLoginPage.page).toHaveURL('https://www.automationexercise.com/login');
  await expect(signupLoginPage.signupLoginLink).toHaveAttribute('style', 'color: orange;');
});

test('Register a new user', async ({ signupLoginPage }) => {
  await signupLoginPage.registerNewUser();
  await expect(signupLoginPage.page).toHaveURL('https://www.automationexercise.com/account_created');
  await expect(signupLoginPage.confirmationHeader).toHaveText('Account Created!');
  await expect(signupLoginPage.continueButton).toBeVisible();
  await signupLoginPage.continueButton.click();
  await signupLoginPage.closeAdFrame();
  await signupLoginPage.deleteAccountLink.click();
  await expect(signupLoginPage.page).toHaveURL('https://www.automationexercise.com/delete_account');
  await expect(signupLoginPage.confirmationHeader).toHaveText('Account Deleted!');
  await expect(signupLoginPage.continueButton).toBeVisible();
  await signupLoginPage.continueButton.click();
  await expect(signupLoginPage.homeLink).toHaveAttribute('style', 'color: orange;');
});