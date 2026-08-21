import { test as base } from '@playwright/test';
import { HomePage } from '../../1-page-objects/automation-exercise/home-page';
import { RegisterPage } from '../../1-page-objects/automation-exercise/register-page';

type Pages = {
  homePage: HomePage;
  registerPage: RegisterPage;
};

export const test = base.extend<Pages> ({
  homePage: async ({ page }, use) => {
    const homePage = new HomePage(page);
    await use(homePage);
  },
  registerPage: async ({ page }, use) => {
    const registerPage = new RegisterPage(page);
    await use(registerPage);
  },
});

export { expect } from '@playwright/test';