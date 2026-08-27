import { expect, test } from '../fixtures/page.fixtures';

test.beforeEach(async ({ homePage }) => {
  await homePage.goToPage('https://www.automationexercise.com/');
});

test('Navigate to the Home page', async ({ homePage }) => {
  await expect(homePage.homeLink).toHaveAttribute('style', 'color: orange;');
  await expect(homePage.page).toHaveURL('https://www.automationexercise.com/');
});