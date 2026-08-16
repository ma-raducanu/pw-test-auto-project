import { test as base } from '@playwright/test';
import { CheckboxPage } from '../../1-page-objects/the-internet/checkboxPage';
import { DragAndDropPage } from '../../1-page-objects/the-internet/dragAndDropPage';
import { DropdownListPage } from '../../1-page-objects/the-internet/dropdownPage';
import { ElementPage } from '../../1-page-objects/the-internet/elementPage';
import { FileDownloadPage } from '../../1-page-objects/the-internet/fileDownloadPage';
import { ForgotPasswordPage } from '../../1-page-objects/the-internet/forgotPasswordPage';
import { LoginPage } from '../../1-page-objects/the-internet/loginPage';

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