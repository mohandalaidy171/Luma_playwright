
import { expect, Locator, Page } from "@playwright/test";

export class LoginPage {
  readonly page: Page;
  readonly icon: Locator;
  readonly emailInput: Locator;
  readonly passwordInput: Locator;
  readonly submitButton: Locator;
  readonly errorMessage :Locator;

  constructor(page: Page) {
    this.page = page;
    this.icon = page.locator('//*[@id="top"]/div[1]/div/ul[2]/li[2]/a');      
    this.emailInput = page.locator('input[name="j_username"]');
    this.passwordInput = page.locator('input[name="j_password"]');
    this.submitButton=page.locator('button.scf-login');
    this.errorMessage=page.locator('.alert-danger');
  }
  


  async login(url:string,email: string, password: string) {

    await this.page.goto(url);
    await this.icon.click();
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.submitButton.click();
   
  }
  async checkIfHomePageAppear(){ 
    await expect(this.page.locator('.navbar-brand')).toBeVisible();}

  async checkErrorMessage(){ 
    await expect(this.errorMessage).toBeVisible();
     await expect(this.errorMessage).toHaveText('User name and password do not match ');
}


}