//include the modules from an external location ✅
//require('@playwright/test')

//we dont need all, so get only the needed 2 modules.. 'require()' is a NODE.js function, not JS ✅
//test == declare tests. ,,, expect == for assertions
 const {test,expect} = require('@playwright/test')
//or > import {test,expect} from '@playwright/test'✅ 

//create a test block ✅
//test('title name',function)... in this case its an anonymous fn
//test('My first test',()=>{})

//{page} is a fixture> explained later .. ✅
//used async to wait for loaded , 2nd step wont run until the 1st one completes(success or error) 
test('My first test',async ({page})=>{

    await page.goto('https://www.google.com')
    await expect(page).toHaveTitle('Google')
})


//to run this > npx playwright test my_first_test.spec.js --project=chromium  --headed