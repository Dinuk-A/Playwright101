//Assertions are verifications/checks we can done on web elements ✅
//use 'expect' keyword
//check if 'actual = expected'

//use kitchen.applitools.com ✅

import { expect, test } from '@playwright/test'
import { text } from 'stream/consumers'

test("First Assertion test", async ({ page }) => {

    //1 present or not ✅
    // this checks if there are only one locator element with this text, can be checked with any attribute
    //but this wont work inside conditions (if statements)
    await expect(page.locator('text=Kitchen')).toHaveCount(1)

    //same as above and will work inside if statements or any conditions ✅
    await page.$('text=Kitchen')

    //2 check visibility / hidden ✅
    // .toBeVisible()   or .toBeHidden()

    //3 enable or not ✅
    // .toBeEnabled()   or .toBeDisabled()

    // some can include multiple values ✅
    // .toHaveAttribute('class','clz1 clz2 clz3')

    //for check with partial values use > /.* / ✅
    // dont use ''s
    // .toHaveAttribute('class',/.*clz3/)

    //4 negative assertions ✅
    // use .not
    //.not.toHaveText("Text")

    // more in playwright.dev  ✅✅✅

    //soft assertion  ✅
    //continue executing the test without stopping even if the assertion fails.
    //show that the assertion fails in final report
    //use .soft()
    await expect.soft(page.locator('text=Kitchen')).toHaveCount(1)

    //visual validation 🤷‍♂️
    // match the live website with a screenshot(compare colors, fonts, placements, size os elements etc)
    await expect(page).toHaveScreenshot()
    //if there is no screenshot, this will fail first time but will take a new SS
    //then check with it the 2nd time (retry run)

})
