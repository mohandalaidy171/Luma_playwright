import {test} from '@playwright/test';
import { LoginPage } from '../pages/LoginPage.ts'; 
import * as testData from '../utils/testData.json';

test.describe('Login feature', () => {

test('Login - verify login with valid data', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.login(
    testData.url,
   testData.validEmail, 
   testData.validPassword);
    await loginPage.checkIfHomePageAppear();
});

test('Login - verify login with invalid email and valid password', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.login(
      testData.url,
   testData.invalidEmail, 
   testData.validPassword);
    await loginPage
    .checkErrorMessage();
});


test('Login - verify login with valid email and invalid password', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.login(
     testData.url,
   testData.validEmail, 
   testData.invalidPassword);
    await loginPage
    .checkErrorMessage();
});
test('Login - verify login with valid email and empty password', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.login(
     testData.url,
   testData.validEmail, 
    '');
    await loginPage
    .checkErrorMessage();
});

test('Login - verify login with empty email and valid password', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.login(
      testData.url,
'', 
   testData.validPassword);
    await loginPage
    .checkErrorMessage();
});
});