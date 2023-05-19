package com.saucedemo.pages;

import com.saucedemo.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

/**
 * Created by Kaushik Patel
 */
public class LoginPage extends Utility {

    private static final Logger log = LogManager.getLogger(LoginPage.class.getName());

    public LoginPage() {
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy(xpath = "//input[@id='user-name']")
    WebElement emailField;

    @CacheLookup
    @FindBy(xpath = "//input[@id='password']")
    WebElement passwordField;

    @CacheLookup
    @FindBy(xpath = "//input[@id='login-button']")
    WebElement loginButton;

    public void enterEmailId(String email) {
        log.info("Enter EmailId " + emailField.toString());
        sendTextToElement(emailField, email);
    }

    public void enterPassword(String password) {
       log.info("Enter Password "+ passwordField.toString());
       sendTextToElement(passwordField, password);
    }
    public void clickOnLoginButton() {
        log.info("Click on Log in button"+ loginButton.toString());
        clickOnElement(loginButton);

    }


}