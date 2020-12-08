package swaglab.initiatedriver;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import swaglab.property.PropertyReader;

public class InitiateDriver {
	
	public static WebDriver driver;
	
	public static void startbrowser()
	{
		if(PropertyReader.property("Browser_name").toString().equalsIgnoreCase("chrome"))
		{
			System.setProperty("webdriver.chrome.driver", "C:\\Users\\Ajay Barad\\Automation\\swaglab\\src\\test\\resources\\Driver\\chromedriver.exe");
			driver=new ChromeDriver();
		}
		driver.get(PropertyReader.property("Application_URL").toString());
		driver.manage().window().maximize();
		
	}

}
