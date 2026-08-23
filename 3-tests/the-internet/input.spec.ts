import { expect, test } from '../../2-fixtures/the-internet/page.fixtures';

test.beforeEach(async ({ inputPage }) => {
  await inputPage.goToInputPage();
});

test('Verify page title', async ({ inputPage }) => {
  await expect(inputPage.contentHeading).toHaveText('Inputs');
});

test('Increase input', async ({ inputPage }) => {
  await inputPage.increaseNumberInputValue(3);
  await expect(inputPage.numberInput).toHaveValue('3');
});

test('Decrease input', async ({ inputPage }) => {
  await inputPage.decreaseNumberInputValue(3);
  await expect(inputPage.numberInput).toHaveValue('-3');
});