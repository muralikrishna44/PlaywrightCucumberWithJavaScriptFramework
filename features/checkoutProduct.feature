Feature: Add Checkout Product Functionality

  Scenario: Verify User is able to Checkout the Product
    Given user navigates to url
    When user enters "standard_user" username
    Then user enters "secret_sauce" password
    Then user clicks Login button
    Then user navigate to the products page
    Then user click on add to cart
    Then user click on container button
    Then user click on checkout button
    Then user enters "Murali" firstname
    Then user enters "Krishna" lastname
    Then user enters "502032" postalcode
    Then user click on continue button
    Then user click on finish button