$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/Feature/swaglab.feature");
formatter.feature({
  "line": 1,
  "name": "user login into swaglab application",
  "description": "",
  "id": "user-login-into-swaglab-application",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Registered user try to login into application",
  "description": "",
  "id": "user-login-into-swaglab-application;registered-user-try-to-login-into-application",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "open the application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "enter the username \"\u003cusername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "enter the password \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user should see the products page",
  "keyword": "Then "
});
formatter.examples({
  "line": 10,
  "name": "",
  "description": "",
  "id": "user-login-into-swaglab-application;registered-user-try-to-login-into-application;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 11,
      "id": "user-login-into-swaglab-application;registered-user-try-to-login-into-application;;1"
    },
    {
      "cells": [
        "standard_user",
        "secret_sauce"
      ],
      "line": 12,
      "id": "user-login-into-swaglab-application;registered-user-try-to-login-into-application;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 12,
  "name": "Registered user try to login into application",
  "description": "",
  "id": "user-login-into-swaglab-application;registered-user-try-to-login-into-application;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "open the application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "enter the username \"standard_user\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "enter the password \"secret_sauce\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user should see the products page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefination.startbrowser()"
});
formatter.result({
  "duration": 7605884800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "standard_user",
      "offset": 20
    }
  ],
  "location": "StepDefination.enter_the_username(String)"
});
formatter.result({
  "duration": 385860000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "secret_sauce",
      "offset": 20
    }
  ],
  "location": "StepDefination.enter_the_password(String)"
});
formatter.result({
  "duration": 148869100,
  "status": "passed"
});
formatter.match({
  "location": "StepDefination.click_on_login_button()"
});
formatter.result({
  "duration": 1241829700,
  "status": "passed"
});
formatter.match({
  "location": "StepDefination.products()"
});
formatter.result({
  "duration": 88334600,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 14,
  "name": "user add the product to cart",
  "description": "",
  "id": "user-login-into-swaglab-application;user-add-the-product-to-cart",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 15,
  "name": "user arrange the products in low price to high price \"\u003cprice\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "user select the product",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "user click on back button and select another item",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "user add the item into cart then remove the item and continue shopping",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "user see the backpack item",
  "keyword": "Then "
});
formatter.examples({
  "line": 21,
  "name": "",
  "description": "",
  "id": "user-login-into-swaglab-application;user-add-the-product-to-cart;",
  "rows": [
    {
      "cells": [
        "price"
      ],
      "line": 22,
      "id": "user-login-into-swaglab-application;user-add-the-product-to-cart;;1"
    },
    {
      "cells": [
        "lohi"
      ],
      "line": 23,
      "id": "user-login-into-swaglab-application;user-add-the-product-to-cart;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 23,
  "name": "user add the product to cart",
  "description": "",
  "id": "user-login-into-swaglab-application;user-add-the-product-to-cart;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 15,
  "name": "user arrange the products in low price to high price \"lohi\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "user select the product",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "user click on back button and select another item",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "user add the item into cart then remove the item and continue shopping",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "user see the backpack item",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "lohi",
      "offset": 54
    }
  ],
  "location": "StepDefination.productprice(String)"
});
formatter.result({
  "duration": 5202939200,
  "status": "passed"
});
formatter.match({
  "location": "StepDefination.selectitem()"
});
formatter.result({
  "duration": 5405201800,
  "status": "passed"
});
formatter.match({
  "location": "StepDefination.back_to_item()"
});
formatter.result({
  "duration": 6470956800,
  "status": "passed"
});
formatter.match({
  "location": "StepDefination.add_to_cart()"
});
formatter.result({
  "duration": 3690653500,
  "status": "passed"
});
formatter.match({
  "location": "StepDefination.application_logo()"
});
formatter.result({
  "duration": 76351900,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "user select another item",
  "description": "",
  "id": "user-login-into-swaglab-application;user-select-another-item",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 26,
  "name": "user click on more option and select all items",
  "keyword": "Given "
});
formatter.step({
  "line": 27,
  "name": "user select the new item",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefination.allitems()"
});
formatter.result({
  "duration": 3353924300,
  "status": "passed"
});
formatter.match({
  "location": "StepDefination.newitem()"
});
formatter.result({
  "duration": 195785800,
  "status": "passed"
});
});