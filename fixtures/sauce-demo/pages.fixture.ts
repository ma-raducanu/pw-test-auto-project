import { test as base } from '@playwright/test';
import { HomePage } from '../../page-objects/sauce-demo/homePage';

type Pages = {
  homePage: HomePage;
};

export const test = base.extend<Pages> ({
  homePage: async ({ page }, use) => {
    const homePage = new HomePage(page);
    await use(homePage);
  },
});

export { expect } from '@playwright/test';