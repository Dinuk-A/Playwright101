//selectors = properties of the web objects(css, class, name, xpath)
//are used to create/find locators

import { test, expect } from '@playwright/test'

test("Selectors demo", async ({ page }) => {

    //go to the web app ✅
    await page.goto('https://www.saucedemo.com/')

    //this will pause the execution open up the playwright inspector window ✅
    // then we can go step by step next steps/resume
    // we can execute manually and record too (can copy the script that auto generated)
    await page.pause()

    //this is also correct ✅
    //await page.click('id=user-name') 

    //best practice + way 1 ✅
    //await page.locator('id=user-name').fill('Dinuka')

    //another way ✅
    await page.locator('[id="user-name"]').fill("Dinuka")

    //using xpath ✅
    //await page.locator('//input[@name="password"]').fill('PW')

    //xpath way 2 ✅
    await page.locator('xpath=//input[@name="password"]').fill('PW')

    //with css selector ✅
    //await page.locator('#login-button').click()

    //using text property ✅
    //await page.locator('text=LOGIN').click()

    //another way  ✅
    //must specify the tag type, if there are multiple = error
    await page.locator('input:has-text("LOGIN")').click()

    //finally
    await page.close()

    //we dont need to manually do the assertions, playwright in built has those ✅
    //(wait forpresent, for visible , etc)
    // default timeouts are in playwright.config.js file

    //we can always override the default ✅
    //await page.waitForSelector('input:has-text("LOGIN")'.{timeout: 5000})


})