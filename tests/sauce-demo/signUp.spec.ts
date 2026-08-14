import { expect, test } from '../../fixtures/sauce-demo/pages.fixture';

test.beforeEach(async ({ homePage }) => {
  await homePage.goToHome();
});

test('Sign Up with valid credentials', async ({ homePage }) => {
  await homePage.signUpButton.click();
});

