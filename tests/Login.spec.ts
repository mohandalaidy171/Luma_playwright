import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage'; // Removed .ts here
import * as testData from '../utils/testData.json';

test.describe('Login feature', () => {

  test('Login - verify login with valid data', async ({ page }) => {
    console.log('Starting valid login test');
    const loginPage = new LoginPage(page);
    try {
      await loginPage.login(testData.url, testData.validEmail, testData.validPassword);
      await loginPage.checkIfHomePageAppear();
      console.log('Finished valid login test');
    } catch (error) {
      console.error('Error in valid login test:', error);
      throw error;
    }
  });

  test('Login - verify login with invalid email and valid password', async ({ page }) => {
    console.log('Starting invalid email test');
    const loginPage = new LoginPage(page);
    try {
      await loginPage.login(testData.url, testData.invalidEmail, testData.validPassword);
      await loginPage.checkErrorMessage();
      console.log('Finished invalid email test');
    } catch (error) {
      console.error('Error in invalid email test:', error);
      throw error;
    }
  });

  test('Login - verify login with valid email and invalid password', async ({ page }) => {
    console.log('Starting invalid password test');
    const loginPage = new LoginPage(page);
    try {
      await loginPage.login(testData.url, testData.validEmail, testData.invalidPassword);
      await loginPage.checkErrorMessage();
      console.log('Finished invalid password test');
    } catch (error) {
      console.error('Error in invalid password test:', error);
      throw error;
    }
  });

  test('Login - verify login with valid email and empty password', async ({ page }) => {
    console.log('Starting empty password test');
    const loginPage = new LoginPage(page);
    try {
      await loginPage.login(testData.url, testData.validEmail, '');
      await loginPage.checkErrorMessage();
      console.log('Finished empty password test');
    } catch (error) {
      console.error('Error in empty password test:', error);
      throw error;
    }
  });

  test('Login - verify login with empty email and valid password', async ({ page }) => {
    console.log('Starting empty email test');
    const loginPage = new LoginPage(page);
    try {
      await loginPage.login(testData.url, '', testData.validPassword);
      await loginPage.checkErrorMessage();
      console.log('Finished empty email test');
    } catch (error) {
      console.error('Error in empty email test:', error);
      throw error;
    }
  });

});
