const {Given, When, Then} = require ('cucumber')
const {CheckoutProductPage} = require('../../page_object/checkout-product.page');

const checkoutPage = new CheckoutProductPage();


Given('user navigates to url', async()=>{
    await checkoutPage.navigate();
 });

 When('user enters {string} username', async(username)=>{
    await checkoutPage.enterUserName(username);
 });

 Then('user enters {string} password', async(password)=>{
    await checkoutPage.enterPassword(password);
 });

 Then('user clicks Login button', async()=>{
    await checkoutPage.clickLoginButton();
 });

 Then('user navigate to the products page',async()=>{
    await checkoutPage.verifyLoginpagesuccessful();
 });

 Then('user click on add to cart', async()=>{
    await checkoutPage.clickOnAddCartButton();
 });

 Then('user click on container button', async()=>{
    await checkoutPage.clickOnContainerButton();
 });

 Then('user click on checkout button', async()=>{
    await checkoutPage.clickOnCheckoutButton();
 });

 Then('user enters {string} firstname', async(firstname)=>{
    await checkoutPage.enterFirstName(firstname);
 });

 Then('user enters {string} lastname', async(lastname)=>{
    await checkoutPage.enterLastName(lastname);
 });

 Then('user enters {string} postalcode', async(postalcode)=>{
    await checkoutPage.enterPostalCode(postalcode);
 });

 Then('user click on continue button', async()=>{
    await checkoutPage.clickOnContinueButton();
 });

 Then('user click on finish button', async()=>{
    await checkoutPage.clickOnFinishButton();
 });

