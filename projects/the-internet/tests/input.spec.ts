import { expect, test } from '../fixtures/page.fixtures';

test.beforeEach(async ({ inputPage }) => {
  await inputPage.goToPage('https://the-internet.herokuapp.com/');
  await inputPage.goToPageLink('Inputs');
});

test('Verify page title', async ({ inputPage }) => {
  await expect(inputPage.contentHeading).toHaveText('Inputs');
});

test('Increase input using keyboard', async ({ inputPage }) => {
  await inputPage.numberInput.fill('3');
  await expect(inputPage.numberInput).toHaveValue('3');
});

test('Decrease input using keyboard', async ({ inputPage }) => {
  await inputPage.numberInput.fill('-3');
  await expect(inputPage.numberInput).toHaveValue('-3');
});

test('Increase input using arrow', async ({ inputPage }) => {
  await inputPage.changeNumberInputValue(3);
  await expect(inputPage.numberInput).toHaveValue('3');
});

test('Decrease input using arrow', async ({ inputPage }) => {
  await inputPage.changeNumberInputValue(-3);
  await expect(inputPage.numberInput).toHaveValue('-3');
});