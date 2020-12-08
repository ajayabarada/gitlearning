Feature: user login into swaglab application

Scenario Outline: Registered user try to login into application for successful login
Given open the application
When enter the username "<username>"
And enter the password "<password>"
And click on login button
Then user should see the products page

Examples:
|username|password|
|standard_user|secret_sauce|

Scenario Outline: user add the product to cart
Given user arrange the products in low price to high price "<price>"
When user select the product
And user click on back button and select another item
And user add the item into cart then remove the item and continue shopping
Then user see the backpack item

Examples:
|price|
|lohi|

Scenario: user select another item
Given user click on more option and select all items
When user select the new item