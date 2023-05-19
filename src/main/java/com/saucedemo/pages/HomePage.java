package com.saucedemo.pages;

import com.saucedemo.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import java.util.List;
/**
 * Created by Kaushik Patel
 */
public class HomePage extends Utility {

    private static final Logger log = LogManager.getLogger(HomePage.class.getName());

    public HomePage() {
        PageFactory.initElements(driver, this);
    }


    @CacheLookup
    @FindBy(xpath ="//span[@class='title']")
    WebElement productMessage;

    By listOfProduct = By.xpath("//div[@class='inventory_item']");

    // This method is to get product message and return the text message.
    public String getProductMessage() {
        log.info("Get the Product message "+ productMessage.toString());

        return getTextFromElement(productMessage);
    }

    // This method is for getting the product quantity Displayed on homepage
    public int numberOfProductDisplayed() {
        log.info("Get number of Product displayed "+ listOfProduct.toString());

        List<WebElement> product = driver.findElements( listOfProduct);
        return product.size();

    }
}
