package swaglab.stepdef;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import swaglab.initiatedriver.InitiateDriver;
import swaglab.page.Page_registration;

public class StepDefination extends InitiateDriver{
	
	@Given("open the application")
	public static void startbrowser()
	{
		InitiateDriver.startbrowser();
	}
	@When("^enter the username \"([^\"]*)\"$")
	public void enter_the_username(String username) 
	{
		Page_registration.username(username);
	}

	@And("^enter the password \"([^\"]*)\"$")
	public void enter_the_password(String password) 
	{
		Page_registration.password(password);
	}

	@And("^click on login button$")
	public void click_on_login_button()
	{
		Page_registration.loginbutton();
	}
	@Then("user should see the products page")
	public static void products()
	{
		Page_registration.product();
	}
	@Given("user arrange the products in low price to high price \"([^\"]*)\"$")
	public static void productprice(String price) throws InterruptedException
	{
		Page_registration.productselection(price);
	}
	@When("user select the product")
	public static void selectitem() throws InterruptedException
	{
		Page_registration.itemselect();
	}
	@And("user click on back button and select another item")
	public static void back_to_item() throws InterruptedException
	{
		Page_registration.selectanotheritem();
	}
	@And("user add the item into cart then remove the item and continue shopping")
	public static void add_to_cart() throws InterruptedException
	{
		Page_registration.addtocart();
	}
	@Then("user see the backpack item")
	public static void application_logo()
	{
		Page_registration.logo();
	}
	@Given("user click on more option and select all items")
	public static void allitems() throws InterruptedException
	{
		Page_registration.newitem();
	}
	@When("user select the new item")
	public static void newitem()
	{
		Page_registration.selectnewitem();
	}

}
