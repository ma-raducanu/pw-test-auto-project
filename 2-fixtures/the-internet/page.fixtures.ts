import { test as base } from '@playwright/test';
import { CheckboxPage } from '../../1-page-objects/the-internet/checkbox.page';
import { DragAndDropPage } from '../../1-page-objects/the-internet/drag-and-drop.page';
import { DropdownListPage } from '../../1-page-objects/the-internet/dropdown.page';
import { ElementPage } from '../../1-page-objects/the-internet/element.page';
import { FileDownloadPage } from '../../1-page-objects/the-internet/file-download.page';
import { ForgotPasswordPage } from '../../1-page-objects/the-internet/forgot-password.page';
import { LoginPage } from '../../1-page-objects/the-internet/login.page';

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