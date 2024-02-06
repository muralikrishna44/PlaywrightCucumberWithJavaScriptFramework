
# Playwright (execution on Moon) with CucumberJS
    
Playwright end-to-end test automation with CucumberJS
    
## Getting Started

* To install Playwright : `npm install playwright --save-dev`
* To install Cucumber   : `npm install cucumber --save-dev`
* To install Junit Reporter : `npm install cucumberjs-junitxml --save-dev`
* To install Chai : `npm install chai --save-dev`
 
## To execute the tests

Define the scripts in package.json as follows :
```json
"scripts": {
    "test": "cucumber-js --parallel 1 -f json:report/report.json && node report.js && cat report/report.json | npx cucumber-junit > report/junitreport.xml"
  }
```
Finally execute the tests with `npm test`
