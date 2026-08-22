import { expect, test } from '../../2-fixtures/the-internet/page-fixtures';

test.beforeEach(async ({ loginPage }) => {
  await loginPage.goToLoginPage();
});

test('Verify page title', async ({ loginPage }) => {
  await expect(loginPage.contentHeading).toHaveText('Login Page');
});

test.describe('Log in/out', () => {
  test.beforeEach(async ({ loginPage }) => {
    await loginPage.logIn(process.env.TEST_USERNAME!, process.env.TEST_PASSWORD!);
  });

  test('Log in with valid credentials', async ({ loginPage }) => {
    await expect(loginPage.contentHeading).toHaveText('Secure Area');
    await expect(loginPage.flashMessage).toContainText('You logged into a secure area!');
  });

  test('Log out', async ({ loginPage }) => {
    await loginPage.logOutLink.click();
    await expect(loginPage.contentHeading).toHaveText('Login Page');
    await expect(loginPage.flashMessage).toContainText('You logged out of the secure area!');
  });
});

test('Log in with invalid credentials', async ({ loginPage }) => {
  await loginPage.logIn('invalidUser', 'invalidPassword');
  await expect(loginPage.flashMessage).toContainText('Your username is invalid!');
});