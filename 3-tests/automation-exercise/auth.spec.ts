import { expect, test } from '../../2-fixtures/automation-exercise/page-fixtures';

test.setTimeout(60_000);
test.beforeEach(async ({ homePage }) => {
  await homePage.goToHome();
  await homePage.consentButton.click();
  await homePage.signupLoginLink.click();
});

test('Navigate to the Login page', async ({ authPage }) => {
  await expect(authPage.page).toHaveURL('https://www.automationexercise.com/login');
});

test('Register a new user', async ({ authPage }) => {
  await authPage.registerNewUser();
  await expect(authPage.page).toHaveURL('https://www.automationexercise.com/account_created');
  await expect(authPage.page).toHaveTitle('Automation Exercise - Account Created');
  await expect(authPage.continueButton).toBeVisible();
});