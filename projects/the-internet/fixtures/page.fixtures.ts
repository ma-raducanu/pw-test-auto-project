import { test as base } from '@playwright/test';
import { CheckboxPage } from '../page-objects/checkbox.page';
import { DragAndDropPage } from '../page-objects/drag-and-drop.page';
import { DropdownListPage } from '../page-objects/dropdown.page';
import { ElementPage } from '../page-objects/element.page';
import { FileDownloadPage } from '../page-objects/file-download.page';
import { ForgotPasswordPage } from '../page-objects/forgot-password.page';
import { HoverPage } from '../page-objects/hover.page';
import { InputPage } from '../page-objects/input.page';
import { LoginPage } from '../page-objects/login.page';

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