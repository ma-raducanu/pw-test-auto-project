import { test as base } from '@playwright/test';
import { CheckboxPage } from '../page-objects/checkboxPage';
import { ElementPage } from '../page-objects/elementPage';
import { LoginPage } from '../page-objects/loginPage';

type Pages = {
  checkboxPage: CheckboxPage;
  elementPage: ElementPage;
  loginPage: LoginPage;
};

export const test = base.extend<Pages> ({
  checkboxPage: async ({ page }, use) => {
    const checkboxPage = new CheckboxPage(page);
    await use(checkboxPage);
  },
  elementPage: async ({ page }, use) => {
    const elementPage = new ElementPage(page);
    await use(elementPage);
  },
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await use(loginPage);
  },
});

export { expect } from '@playwright/test';