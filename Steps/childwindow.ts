import test, { expect, Page, TestInfo, BrowserContext } from '@playwright/test';
import * as testdata from "../testdata/testdata.json"
import * as selectorhub from "../objectrepo/selectorhub.json"


export class ChildWindow{
    protected page: Page;
    protected context: BrowserContext;

    constructor(page: Page, context: BrowserContext) {
        this.page = page;
        this.context = context;
    }

    async childwindow()
    {
    
    const clicklink = this.page.locator(selectorhub.objRepo.childelements.secondwindow);
  
    const [newPage] = await  Promise.all([
  
    this.context.waitForEvent('page'),
    
    clicklink.click(),
  
    ])
    const text = await newPage.locator(selectorhub.objRepo.childelements.newstringvalue).textContent();
    console.log(text);
    }
}