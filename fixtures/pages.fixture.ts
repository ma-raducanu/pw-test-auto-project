import { test as base } from '@playwright/test';
import { ElementsPage } from '../page-objects/elementsPage';

type Pages = {
  elementsPage: ElementsPage;
};

export const test = base.extend<Pages>({
  elementsPage: async ({ page }, use) => {
    const elementsPage = new ElementsPage(page);
    await use(elementsPage);
  },
});

export { expect } from '@playwright/test';