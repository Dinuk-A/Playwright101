//Trace Viewer is a GUI tool that helps view the executed tests with their SSs, logs,timelines...etc ✅

//HOW TO USE
//open config file(playwright.config.js) and set > trace: 'on-first-retry' ✅
//there are other options too> keep trace permanatly/only after a failure...etc

//a trace.zip file will be saved inside \test-results folder

//to use with commands > n.p. test --trace retain-on-failure / n.p. test --trace  on

//set trace pogamatically in each test ✅
const { test, expect } = require('@playwright/test')
test('trace viewer test', async ({ page, context }) => {

    //init the tv ✅
    await context.tracing.start({ screenshots: true, screenshots: true });

    await page.goto('https://www.google.com')
    await expect(page).toHaveTitle('Google')

    //stop tracing ✅
    //this can be done in the middle too, if we wanted
    await context.tracing.stop({path: 'googleTest-trace.zip'})
})

//to view the trace file > n.p. show-trace folder\file.zip

//use hooks to run this after and before all tests > discussed later ✔