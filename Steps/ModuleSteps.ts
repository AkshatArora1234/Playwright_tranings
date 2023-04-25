import test, { expect, Page, TestInfo, BrowserContext } from '@playwright/test';
import * as testdata from "../testdata/testdata.json"
import * as selectorhub from "../objectrepo/selectorhub.json"


export class ModuleSteps{
    protected page: Page;
    protected context: BrowserContext;

    constructor(page: Page, context: BrowserContext) {
        this.page = page;
        this.context = context;
    }

async uilocators()
{
    // Enter the userid in the textbox and verify the same
    const textbox = await this.page.locator(selectorhub.objRepo.uiControls.userId);
    await textbox.type(testdata.Data.sampledatatextbox);
    const textboxValue1 = await textbox.inputValue();
    console.log(textboxValue1);
    expect(textboxValue1).toStrictEqual(testdata.Data.sampledatatextbox);

    // Enter the value in the password field
    const textbox1 = await this.page.locator(selectorhub.objRepo.uiControls.Password);// #userid [id='userid']"salutationRBtnHerr": "text=Herr"
    await textbox1.type(testdata.Data.sampledatapass);

    // Select value from the dropdown and verify the same
    const Dropdown = this.page.locator(selectorhub.objRepo.uiControls.dropdownvalue);
    const valueoddropdown = await Dropdown.selectOption(testdata.Data.sampledatadropdown);
   await expect(this.page.locator(selectorhub.objRepo.uiControls.dropdownvalue)).toBeEnabled();
   console.log(valueoddropdown)
   
   //Click on the box
   const checkbox = this.page.locator(selectorhub.objRepo.uiControls.checkbox).click();
  
}

}