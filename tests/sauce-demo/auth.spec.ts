import { expect, test } from '../../fixtures/sauce-demo/pages.fixture';
import { generateUniqueEmail, generateUniquePassword } from '../../utils/sauce-demo/test-data';

test.beforeEach(async ({ homePage }) => {
  await homePage.goToHome();
});

test.skip('Sign up with valid credentials', async ({ homePage, registerPage }) => {
  await registerPage.signUpButton.click();
  await registerPage.fillInRegistrationForm('John', 'Smith', generateUniqueEmail(), generateUniquePassword());
  const userEmail = await registerPage.emailInput.textContent();
  await registerPage.createButton.click();
  await homePage.myAccountLink.click();
  await expect(homePage.yourAccountSection).toContainText(userEmail!);
});