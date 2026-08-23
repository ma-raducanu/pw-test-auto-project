import { expect, test } from '../../2-fixtures/automation-exercise/page.fixtures';

test.beforeEach(async ({ homePage }) => {
  await homePage.goToHomePage();
});

test('Navigate to the Home page', async ({ homePage }) => {
  await expect(homePage.homeLink).toHaveAttribute('style', 'color: orange;');
  await expect(homePage.page).toHaveURL('https://www.automationexercise.com/');
});