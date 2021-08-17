const puppeeter = require('puppeteer');

const link =  'https://gentle-oasis-79578.herokuapp.com/';

class TestSuit {

    // Check the title of Wather api
    async testCheckHeader() {
        console.log('\x1b[35m%s\x1b[0m', 'Test 1 is running');
        
        console.log("\x1b[33m%s\x1b[0m",'Browser is running')
        const browser = await puppeeter.launch({ headless: false });
    
        console.log('Create a new page')
        const page = await browser.newPage();
    
        console.log('Go to the page https://gentle-oasis-79578.herokuapp.com/')
        await page.goto(link)
    
        console.log('Find title of the app')
        let element = await page.$('.card-text')
        let result = await page.evaluate(element => element.textContent, element)
        console.log(result)
    
        console.log('Compare app title')
        if(result == 'You can check weather here!') {
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
        const browser = await puppeeter.launch({ headless: false });
    
        console.log('Create a new page')
        const page = await browser.newPage();
    
        console.log('Go to the page https://gentle-oasis-79578.herokuapp.com/')
        await page.goto(link)
    
        console.log('Find description of the app')
        let element = await page.$('.card-text')
        let result = await page.evaluate(element => element.textContent, element)
        console.log(result)
    
        console.log('Compare app title')
        if(result == 'You can check weather here!1') {
            console.log("\x1b[36m%s\x1b[0m",'the description of the app is Weather api, Good')
        }
        else {
            console.log("\x1b[31m%s\x1b[0m",'the description of the app is not Weather api, Error')
        }
    
        console.log("\x1b[33m%s\x1b[0m",'Close the browser')
        await browser.close();
    }
    
}

const testSuit = new TestSuit();

const runTests = async () => {
    await testSuit.testCheckHeader()

    await testSuit.testCheckDescription()
}

runTests();


