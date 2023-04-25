import { test, expect, BrowserContext, Page } from '@playwright/test';
import * as Testdata from "../testData/testdata.json";
import { ChildWindow } from "../Steps/childwindow";

var context: BrowserContext;
var childsteps: ChildWindow;
var page: Page;

test.beforeAll(async ({ browser }) => {
  context = await browser.newContext();
  page = await context.newPage();
  childsteps = new ChildWindow(page, context);
  
  await page.goto('https://selectorshub.com/xpath-practice-page/');
});

test('handling child element', async({browser }) => {
 
   //User is able to move to child window and verify the page
   await childsteps.childwindow();
    
  });