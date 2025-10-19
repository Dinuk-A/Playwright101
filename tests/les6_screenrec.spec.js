//2 ways to start recording a test execution
// 1 record all the tests> via config file (playwright.config.js)

/*use: {
    video: 'on', 
    launchOption: {
        slowMo: 1000
    }
}*/

// slowMo will slow down the execution by given mili secs

//2 record only in the test we needed
import { test, expect, chromium } from '@playwright/test'

test('recording demo', async () => {

    const browser = await chromium.launch({
        slowMo: 1000,
        headless: false
    })

    const context = await browser.newContext({
        recordVideo: {
            dir: 'videos/',
            size: { width: 800, height: 600 }
        }
    })

    const page = await context.newPage()

    //test elements goes here...

    //finally close the context
    await context.close()

})



