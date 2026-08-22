import { expect, test } from '../../2-fixtures/automation-exercise/page-fixtures';

test.setTimeout(60_000);
test.beforeEach(async ({ homePage }) => {
  await homePage.goToHome();
});

test('Navigate to the Home page', async ({ homePage }) => {
  await expect(homePage.homeLink).toHaveAttribute('style', 'color: orange;');
});