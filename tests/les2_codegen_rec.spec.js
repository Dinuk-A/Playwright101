//playwright by default come with a tool called codegen...can be used to record tests and generate test scripts

//steps 
//1... manually go to the website we need to test ✅
//npx playwright codegen 
//this opens 2 windows(browser(by default its chrome, can change later), playwright inspector window)
//everything we do will be recorded as steps 

//following one is pasted from playwright inspector
import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('file:///D:/ST-SQA/playwright101/sample_webpages/home.html');
  await page.getByRole('textbox', { name: 'Enter username' }).click();
  await page.getByRole('textbox', { name: 'Enter username' }).fill('testing1');
  await page.getByRole('textbox', { name: 'Enter password' }).click();
  await page.getByRole('textbox', { name: 'Enter password' }).fill('cats');
  await page.getByRole('button', { name: 'Click here' }).click();
});

//npx playwright test les2_codegen_rec.spec.js --headed --project=chromium
 
//2 ... record a specific website by giving it in the command ✅
// npx playwright codegen www.google.com
// npx playwright codegen file:///D:/ST-SQA/playwright101/sample_webpages/home.html

// to see all the options we can use with codegen cmd >>npx playwright codegen -h  ✅

// n.p.c ===  npx playwright codegen 

//record on a specific browser > n.p.c --browser=firefox ✅

//save the steps to a file, with a specific language(js/python/java...) > n.p.c --target javascript -o folder\name.js  ✅
//need to manually add the test block and name, import the modules

//emulate a device(ones that already on dev tools) > n.p.c. --device="iPhone 7" ✅