import { test as base } from '@playwright/test';
import { HomePage } from '../../1-page-objects/automation-exercise/home.page';
import { SignupLoginPage } from '../../1-page-objects/automation-exercise/signup-login.page';

type Pages = {
  homePage: HomePage;
  signupLoginPage: SignupLoginPage;
};

export const test = base.extend<Pages> ({
  homePage: async ({ page }, use) => await use(new HomePage(page)),
  signupLoginPage: async ({ page }, use) => await use(new SignupLoginPage(page)),
});

export { expect } from '@playwright/test';