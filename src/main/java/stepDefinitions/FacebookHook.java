package stepDefinitions;

import java.io.File;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.remote.DesiredCapabilities;

import cucumber.api.PendingException;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class FacebookHook 
{
	WebDriver driver;
	//Global hooks -- It will execute for every scenario
	@Before()
	public void setUp()
	{
		ChromeOptions options = new ChromeOptions();
		options.addArguments("--disable-notifications");
		File f = new File("chromedriver.exe");
	    System.setProperty("webdriver.chrome.driver", f.getAbsolutePath());
	    System.out.println(f.getAbsolutePath());
		 driver= new ChromeDriver(options);
		 driver.manage().window().maximize();
		 System.out.println("Execute Before Method before a scenario");
		
	}
	
	@After()
	public void tearDown()
	{
		driver.close();
		System.out.println("Executed After method after a scenario");
	}
	
	
	@Given("^user is on login page$")
	public void user_is_on_login_page() throws Throwable {
		 driver.get("https://www.facebook.com/");
	}

	@When("^user enters \"([^\"]*)\" and \"([^\"]*)\"$")
	public void user_enters_and(String arg1, String arg2) throws Throwable {
		Thread.sleep(5000);
		driver.findElement(By.cssSelector("#email")).sendKeys(arg1);
		driver.findElement(By.cssSelector("#pass")).sendKeys(arg2);	
	}
	@Then("^user clicked on login button$")
	public void user_clicked_on_login_button() throws Throwable {
		Thread.sleep(5000);
		driver.findElement(By.xpath("//input[@value='Log In']]")).click();
	}

	@Then("^user successfully logged in$")
	public void user_successfully_logged_in() throws Throwable {
	Thread.sleep(5000);
     WebElement element=driver.findElement(By.xpath("(//span[text()='Raj'])[1]"));
     Assert.assertEquals("Raj", element.getText());
     System.out.println("User Successfully logged in");
	}

	@Then("^user should not get logged in$")
	public void user_should_not_get_logged_in() throws Throwable {
	    System.out.println("User not logged in");
	}


}
