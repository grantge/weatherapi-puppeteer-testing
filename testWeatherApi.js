const puppeeter = require('puppeteer');

// Link to the page 
const link =  'https://gentle-oasis-79578.herokuapp.com/';

// Selectors
const selectorTitle = '.card-header';
const selectorDescr = '.card-text';
const selectorLabel = '.col-form-label';

// Browser functions
const dontRunBrowser = false;


class TestSuit {

    // Check the title of Wather api
    async testCheckHeader() {
        console.log('\x1b[35m%s\x1b[0m', 'Test 1 is running');
        
        console.log("\x1b[33m%s\x1b[0m",'Browser is running')
        const browser = await puppeeter.launch({ headless: dontRunBrowser });
    
        console.log('Create a new page')
        const page = await browser.newPage();
    
        console.log('Go to the page https://gentle-oasis-79578.herokuapp.com/')
        await page.goto(link)
    
        console.log('Find title of the app')
        let element = await page.$(selectorTitle)
        let result = await page.evaluate(element => element.textContent, element)
        console.log(result)
    
        console.log('Compare app title')
        if(result == 'Weather api') {
            console.log("\x1b[36m%s\x1b[0m",'the title of the app is Weather api, Good')
        }
        else {
            console.log("\x1b[31m%s\x1b[0m",'the title of the app is not Weather api, Error')
        }
    
        console.log("\x1b[33m%s\x1b[0m",'Close the browser')
        await browser.close();
    }

    // Check App Description
    async testCheckDescription() {
        console.log('\x1b[35m%s\x1b[0m', 'Test 2 is running');
        
        console.log("\x1b[33m%s\x1b[0m",'Browser is running')
        const browser = await puppeeter.launch({ headless: dontRunBrowser });
    
        console.log('Create a new page')
        const page = await browser.newPage();
    
        console.log('Go to the page https://gentle-oasis-79578.herokuapp.com/')
        await page.goto(link)
    
        console.log('Find description of the app')
        let element = await page.$(selectorDescr)
        let result = await page.evaluate(element => element.textContent, element)
        console.log(result)
    
        console.log('Compare app description text')
        if(result == 'You can check weather here!') {
            console.log("\x1b[36m%s\x1b[0m",'the description text of the app is You can check weather here!, Good')
        }
        else {
            console.log("\x1b[31m%s\x1b[0m",'the description text of the app is not You can check weather here!, Error')
        }
    
        console.log("\x1b[33m%s\x1b[0m",'Close the browser')
        await browser.close();
    }
    
    // Check the label of the app 
    async testCheckLabel() {
        console.log('\x1b[35m%s\x1b[0m', 'Test 3 is running');
        
        console.log("\x1b[33m%s\x1b[0m",'Browser is running')
        const browser = await puppeeter.launch({ headless: dontRunBrowser });
    
        console.log('Create a new page')
        const page = await browser.newPage();
    
        console.log('Go to the page https://gentle-oasis-79578.herokuapp.com/')
        await page.goto(link)
    
        console.log('Find label of the app')
        let element = await page.$(selectorLabel)
        let result = await page.evaluate(element => element.textContent, element)
        console.log(result)
    
        console.log('Compare app label')
        
        if(result == 'City:') {
            console.log("\x1b[36m%s\x1b[0m",'the label of the app is City:, Good')
        }
        else {
            console.log("\x1b[31m%s\x1b[0m",'the label of the app is not City:, Error')
        }
    
        console.log("\x1b[33m%s\x1b[0m",'Close the browser')
        await browser.close();
    }
}

const testSuit = new TestSuit();

const runTests = async () => {
    // First test
    await testSuit.testCheckHeader()
    // Second test
    await testSuit.testCheckDescription()
    // Third test
    await testSuit.testCheckLabel();
}

runTests();


