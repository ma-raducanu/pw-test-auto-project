import { test as base } from '@playwright/test';
import { CheckboxPage } from '../page-objects/checkboxPage';
import { DragAndDropPage } from '../page-objects/dragAndDropPage';
import { DropdownListPage } from '../page-objects/dropdownPage';
import { ElementPage } from '../page-objects/elementPage';
import { FileDownloadPage } from '../page-objects/fileDownloadPage';
import { ForgotPasswordPage } from '../page-objects/forgotPasswordPage';
import { LoginPage } from '../page-objects/loginPage';

type Pages = {
  checkboxPage: CheckboxPage;
  dragAndDropPage: DragAndDropPage;
  dropdownListPage: DropdownListPage;
  elementPage: ElementPage;
  fileDownloadPage: FileDownloadPage;
  forgotPasswordPage: ForgotPasswordPage;
  loginPage: LoginPage;
};

export const test = base.extend<Pages> ({
  checkboxPage: async ({ page }, use) => {
    const checkboxPage = new CheckboxPage(page);
    await use(checkboxPage);
  },
  dragAndDropPage: async ({ page }, use) => {
    const dragAndDropPage = new DragAndDropPage(page);
    await use(dragAndDropPage);
  },
  dropdownListPage: async ({ page }, use) => {
    const dropdownListPage = new DropdownListPage(page);
    await use(dropdownListPage);
  },
  elementPage: async ({ page }, use) => {
    const elementPage = new ElementPage(page);
    await use(elementPage);
  },
  fileDownloadPage: async ({ page }, use) => {
    const fileDownloadPage = new FileDownloadPage(page);
    await use(fileDownloadPage);
  },
  forgotPasswordPage: async ({ page }, use) => {
    const forgotPasswordPage = new ForgotPasswordPage(page);
    await use(forgotPasswordPage);
  },
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await use(loginPage);
  },
});

export { expect } from '@playwright/test';