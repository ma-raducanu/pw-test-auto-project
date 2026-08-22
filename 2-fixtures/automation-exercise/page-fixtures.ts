import { test as base } from '@playwright/test';
import { HomePage } from '../../1-page-objects/automation-exercise/home-page';
import { AuthPage } from '../../1-page-objects/automation-exercise/auth-page';

type Pages = {
  homePage: HomePage;
  authPage: AuthPage;
};

export const test = base.extend<Pages> ({
  homePage: async ({ page }, use) => {
    const homePage = new HomePage(page);
    await use(homePage);
  },
  authPage: async ({ page }, use) => {
    const authPage = new AuthPage(page);
    await use(authPage);
  },
});

export { expect } from '@playwright/test';