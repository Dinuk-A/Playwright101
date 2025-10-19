import test from "@playwright/test"

//hooks
//run only a single test when there are multiple tests in the same file
//use .only 
test.only('name', () => { })

//run a common test before all the tests
//for these name is not given
//good for login scenarios
test.beforeEach(() => { })

//same as above but for run after each test
//good for page closings
test.afterEach(() => { })

//beforeAll = only run once before all the tests
//afterAll = same as above but as the last test

//multiple hooks can be defined in a page, so they will run in the defined order of the page

// grouping tests
//function is not async
test.describe('Grouped tests 01', () => {

    // multiple tests can be declared here
    test('test 1', async () => { })
    test('test 2', async () => { })

    //each group can have their own beforeAll like hooks, they wont affect outside the group
})