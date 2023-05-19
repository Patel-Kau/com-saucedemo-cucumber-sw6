$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "line": 1,
  "name": "Login Test",
  "description": "As user I want to login into sauce demo website",
  "id": "login-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 2590498200,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "User should login successfully with valid credentials",
  "description": "",
  "id": "login-test;user-should-login-successfully-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@sanity"
    },
    {
      "line": 4,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I am on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I enter email \"standard_user\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I enter password \"secret_sauce\"",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Verify the product text on top of the page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnLoginPage()"
});
formatter.result({
  "duration": 94459500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "standard_user",
      "offset": 15
    }
  ],
  "location": "LoginSteps.iEnterEmail(String)"
});
formatter.result({
  "duration": 122520200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "secret_sauce",
      "offset": 18
    }
  ],
  "location": "LoginSteps.iEnterPassword(String)"
});
formatter.result({
  "duration": 71759700,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 101012800,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.verifyTheProductTextOnTopOfThePage()"
});
formatter.result({
  "duration": 63897300,
  "status": "passed"
});
formatter.after({
  "duration": 649818600,
  "status": "passed"
});
formatter.before({
  "duration": 1468856200,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Verify that the Six product are displayed on page",
  "description": "",
  "id": "login-test;verify-that-the-six-product-are-displayed-on-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 14,
      "name": "@smoke"
    },
    {
      "line": 14,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "I am on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "I enter email \"standard_user\"",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "I enter password \"secret_sauce\"",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Verify the product quantity on top of the page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnLoginPage()"
});
formatter.result({
  "duration": 94800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "standard_user",
      "offset": 15
    }
  ],
  "location": "LoginSteps.iEnterEmail(String)"
});
formatter.result({
  "duration": 204367000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "secret_sauce",
      "offset": 18
    }
  ],
  "location": "LoginSteps.iEnterPassword(String)"
});
formatter.result({
  "duration": 83036900,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 98372900,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.verifyTheProductQuantityOnTopOfThePage()"
});
formatter.result({
  "duration": 33517600,
  "status": "passed"
});
formatter.after({
  "duration": 671520800,
  "status": "passed"
});
});