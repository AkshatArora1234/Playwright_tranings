import { test, expect, BrowserContext, Page } from '@playwright/test';
import * as Testdata from "../testData/testdata.json";
import { ModuleSteps } from "../Steps/ModuleSteps";
import { APIMethods } from "../Steps/APISteps"

var context: BrowserContext;
var modulesteps: ModuleSteps;
var apiMethods = new APIMethods();
var page: Page;


test('API Post Call', async() => {
 
  await apiMethods.postSample();
});

test('API put Call', async() => {
 
  await apiMethods.putSample();
});

test('API get Call', async() => {
 
  await apiMethods.getSample();
});