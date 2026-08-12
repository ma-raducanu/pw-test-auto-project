import { test as base } from '@playwright/test';
import { ElementsPage } from '../page-objects/elementsPage';
import { LoginPage } from '../page-objects/loginPage';

type Pages = {
  elementsPage: ElementsPage;
  loginPage: LoginPage;
};

export const test = base.extend<Pages>({
  elementsPage: async ({ page }, use) => {
    const elementsPage = new ElementsPage(page);
    await use(elementsPage);
  },
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await use(loginPage);
  },
});

export { expect } from '@playwright/test';