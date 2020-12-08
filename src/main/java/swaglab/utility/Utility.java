package swaglab.utility;

import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;

import swaglab.initiatedriver.InitiateDriver;

public class Utility extends InitiateDriver{
	
	public static void clickonelement(WebElement element)
	{
		WebDriverWait wait= new WebDriverWait(driver, 50);
		wait.until(ExpectedConditions.elementToBeClickable(element));
		element.click();
	}
	public static void textboxelement(WebElement element, String text)
	{
		WebDriverWait wait=new WebDriverWait(driver, 20);
		wait.until(ExpectedConditions.visibilityOf(element));
		element.sendKeys(text);
	}
	public static void highlight(WebElement element)
	{
		if (driver instanceof JavascriptExecutor) {
	        ((JavascriptExecutor)driver).executeScript("arguments[0].style.border='3px solid red'", element);
	    }
	}
	public static void dropdown(WebElement element,String text)
	{
		Select select=new Select(element);
		select.selectByValue(text);
	}
	public static void scrolltoelement(WebElement element)
	{
		Actions action=new Actions(driver);
		action.moveToElement(element);
		action.perform();
	}

}
