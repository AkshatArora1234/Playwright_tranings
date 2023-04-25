import { test, expect, BrowserContext, Page } from '@playwright/test';
import * as Testdata from "../testData/testdata.json";
import { ModuleSteps } from "../Steps/ModuleSteps";

var context: BrowserContext;
var modulesteps: ModuleSteps;
var page: Page;

test.beforeAll(async ({ browser }) => {
  context = await browser.newContext();
  page = await context.newPage();
  modulesteps = new ModuleSteps(page, context);
  
  await page.goto('https://selectorshub.com/xpath-practice-page/');
});

test('UI Controls', async({browser }) => {
 
  //The method is use to verify the ui locators on the page 
  await modulesteps.uilocators();
});