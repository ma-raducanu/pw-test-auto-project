import { expect, test } from '../../2-fixtures/automation-exercise/page-fixtures';

test.beforeEach(async ({ homePage }) => {
  await homePage.goToHome();
  await homePage.signupLoginLink.click();
});

test('Navigate to the Login page', async ({ signupLoginPage }) => {
  await expect(signupLoginPage.page).toHaveURL('https://www.automationexercise.com/login');
  await expect(signupLoginPage.signupLoginLink).toHaveAttribute('style', 'color: orange;');
});

test('Register a new user', async ({ homePage, signupLoginPage }) => {
  await signupLoginPage.registerNewUser();
  await expect(signupLoginPage.page).toHaveURL('https://www.automationexercise.com/account_created');
  await expect(signupLoginPage.confirmationHeader).toHaveText('Account Created!');
  await expect(signupLoginPage.continueButton).toBeVisible();
  await signupLoginPage.continueButton.click();
  await homePage.closeAdFrame();
  await homePage.deleteAccountLink.click();
  await expect(signupLoginPage.page).toHaveURL('https://www.automationexercise.com/delete_account');
  await expect(signupLoginPage.confirmationHeader).toHaveText('Account Deleted!');
  await expect(signupLoginPage.continueButton).toBeVisible();
  await signupLoginPage.continueButton.click();
  await expect(homePage.homeLink).toHaveAttribute('style', 'color: orange;');
});