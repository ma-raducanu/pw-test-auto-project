import { expect, test } from '../../2-fixtures/automation-exercise/page-fixtures';
import { generateUniqueEmail, generateUniquePassword } from '../../0-utils/sauce-demo/test-data';

test.beforeEach(async ({ homePage }) => {
  await homePage.goToHome();
});

test('Signup / Login', async ({ homePage }) => {
  await homePage.signupLoginLink.click();
  await expect(homePage.page).toHaveURL('https://www.automationexercise.com/login');
});