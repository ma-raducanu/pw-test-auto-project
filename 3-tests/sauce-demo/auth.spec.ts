import { expect, test } from '../../2-fixtures/sauce-demo/pages.fixture';
import { generateUniqueEmail, generateUniquePassword } from '../../0-utils/sauce-demo/test-data';

test.beforeEach(async ({ homePage }) => {
  await homePage.goToHome();
});

test('Verify page title', async ({ homePage }) => {
  await expect(homePage.contentHeading).toHaveText('Just a demo site showing off what Sauce can do.');
});

test.skip('Sign up with valid credentials', async ({ homePage, registerPage }) => {
  await registerPage.signUpButton.click();
  await registerPage.fillInRegistrationForm('John', 'Smith', generateUniqueEmail(), generateUniquePassword());
  const userEmail = await registerPage.emailInput.textContent();
  await registerPage.createButton.click();
  await homePage.myAccountLink.click();
  await expect(homePage.yourAccountSection).toContainText(userEmail!);
});