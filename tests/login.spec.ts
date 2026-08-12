import { test, expect } from '../fixtures/pages.fixture';

test.beforeEach(async ({ loginPage }) => {
  await loginPage.goto();
});

test('Page Title', async ({ loginPage }) => {
  await expect(loginPage.contentHeading).toHaveText('Login Page');
});

test.describe('Log In/Out', () => {

  test.beforeEach(async ({ loginPage }) => {
    await loginPage.logIn(process.env.TEST_USERNAME!, process.env.TEST_PASSWORD!);
  });

  test('Log In', async ({ loginPage }) => {
    await expect(loginPage.contentHeading).toHaveText('Secure Area');
    await expect(loginPage.flashMessage).toContainText('You logged into a secure area!');
  });

  test('Log Out', async ({ loginPage }) => {
    await loginPage.logOutButton.click();
    await expect(loginPage.contentHeading).toHaveText('Login Page');
    await expect(loginPage.flashMessage).toContainText('You logged out of the secure area!');
  });
});

test('Invalid Log In', async ({ loginPage }) => {
  await loginPage.logIn('invalidUser', 'invalidPassword');
  await expect(loginPage.flashMessage).toContainText('Your username is invalid!');
});