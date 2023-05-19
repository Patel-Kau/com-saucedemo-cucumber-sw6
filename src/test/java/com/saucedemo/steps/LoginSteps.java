package com.saucedemo.steps;

import com.saucedemo.pages.HomePage;
import com.saucedemo.pages.LoginPage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.testng.Assert;

public class LoginSteps {
    @Given("^I am on login page$")
    public void iAmOnLoginPage() {

    }

    @When("^I enter email \"([^\"]*)\"$")
    public void iEnterEmail(String email)  {
new LoginPage().enterEmailId(email);
    }

    @Then("^I enter password \"([^\"]*)\"$")
    public void iEnterPassword(String password)  {
        new LoginPage().enterPassword(password);

    }

    @And("^I click on login button$")
    public void iClickOnLoginButton() {
        new LoginPage().clickOnLoginButton();
    }

    @Then("^Verify the product text on top of the page$")
    public void verifyTheProductTextOnTopOfThePage() {
    String expectedMessage = "Products";
    String actualMessage = new HomePage().getProductMessage();
    Assert.assertEquals( actualMessage, expectedMessage,"Login page not displayed");

    }


    @Then("^Verify the product quantity on top of the page$")
    public void verifyTheProductQuantityOnTopOfThePage() {
        int expectedMessage = 6;
        int actualMessage = new HomePage().numberOfProductDisplayed();
        Assert.assertEquals( actualMessage, expectedMessage, "Login page not displayed");

    }
}
