import { test as base } from '@playwright/test';
import { CheckboxPage } from '../1-page-objects/checkbox.page';
import { DragAndDropPage } from '../1-page-objects/drag-and-drop.page';
import { DropdownListPage } from '../1-page-objects/dropdown.page';
import { ElementPage } from '../1-page-objects/element.page';
import { FileDownloadPage } from '../1-page-objects/file-download.page';
import { ForgotPasswordPage } from '../1-page-objects/forgot-password.page';
import { HoverPage } from '../1-page-objects/hover.page';
import { InputPage } from '../1-page-objects/input.page';
import { LoginPage } from '../1-page-objects/login.page';

type Pages = {
  checkboxPage: CheckboxPage;
  dragAndDropPage: DragAndDropPage;
  dropdownListPage: DropdownListPage;
  elementPage: ElementPage;
  fileDownloadPage: FileDownloadPage;
  forgotPasswordPage: ForgotPasswordPage;
  hoverPage: HoverPage;
  inputPage: InputPage;
  loginPage: LoginPage;
};

export const test = base.extend<Pages>({
  checkboxPage: async ({ page }, use) => await use(new CheckboxPage(page)),
  dragAndDropPage: async ({ page }, use) => await use(new DragAndDropPage(page)),
  dropdownListPage: async ({ page }, use) => await use(new DropdownListPage(page)),
  elementPage: async ({ page }, use) => await use(new ElementPage(page)),
  fileDownloadPage: async ({ page }, use) => await use(new FileDownloadPage(page)),
  forgotPasswordPage: async ({ page }, use) => await use(new ForgotPasswordPage(page)),
  hoverPage: async ({ page }, use) => await use(new HoverPage(page)),
  inputPage: async ({ page }, use) => await use(new InputPage(page)),
  loginPage: async ({ page }, use) => await use(new LoginPage(page)),
});

export { expect } from '@playwright/test';