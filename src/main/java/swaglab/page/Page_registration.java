package swaglab.page;

import static org.junit.Assert.assertEquals;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

import swaglab.initiatedriver.InitiateDriver;
import swaglab.utility.Utility;

public class Page_registration extends InitiateDriver{
	
	public static void username(String text)
	{
		Utility.textboxelement(driver.findElement(By.id("user-name")), text);
	}
	public static void password(String text)
	{
		Utility.textboxelement(driver.findElement(By.id("password")), text);
	}
	public static void loginbutton()
	{
		Utility.clickonelement(driver.findElement(By.id("login-button")));
	}
	public static void product()
	{
		WebElement element=driver.findElement(By.className("product_label"));
		System.out.println("value is:"+element.getText());
		assertEquals("Products", element.getText());
		Utility.highlight(element);
	}
	public static void productselection(String text) throws InterruptedException
	{
		Thread.sleep(5000);
		Utility.highlight(driver.findElement(By.className("product_sort_container")));
		Utility.dropdown(driver.findElement(By.className("product_sort_container")), text);	
	}
	public static void itemselect() throws InterruptedException
	{
		Thread.sleep(5000);
		Utility.clickonelement(driver.findElement(By.xpath("//div[text()='Sauce Labs Onesie']")));
	}
	public static void selectanotheritem() throws InterruptedException
	{
		Thread.sleep(3000);
		Utility.clickonelement(driver.findElement(By.xpath("//button[text()='<- Back']")));
		Thread.sleep(3000);
		Utility.clickonelement(driver.findElement(By.xpath("//div[text()='Sauce Labs Backpack']")));
	}
	public static void addtocart() throws InterruptedException
	{
		Utility.clickonelement(driver.findElement(By.xpath("//button[text()='ADD TO CART']")));
		Utility.clickonelement(driver.findElement(By.xpath("//a[@class='shopping_cart_link fa-layers fa-fw']")));
		Utility.clickonelement(driver.findElement(By.xpath("//button[text()='REMOVE']")));
		Thread.sleep(3000);
		Utility.clickonelement(driver.findElement(By.xpath("//a[text()='Continue Shopping']")));
	}
	public static void logo()
	{
		WebElement item=driver.findElement(By.xpath("//div[text()='Sauce Labs Backpack']"));
		System.out.println("value is: "+item.getText());
		assertEquals("Sauce Labs Backpack", item.getText());
		Utility.highlight(item);
	}
	public static void newitem() throws InterruptedException
	{
		Utility.clickonelement(driver.findElement(By.className("bm-burger-button")));
		Thread.sleep(3000);
		Utility.clickonelement(driver.findElement(By.xpath("//a[text()='All Items']")));
	}
	public static void selectnewitem()
	{
		Utility.scrolltoelement(driver.findElement(By.xpath("//div[text()='Test.allTheThings() T-Shirt (Red)']")));
	}
}
