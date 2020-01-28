package stepDefinitions;

import java.io.File;
import java.util.NoSuchElementException;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class LoginStepDefinitions 
{

	   WebDriver driver;
	@Given("^User is already on login page$")
	public void user_is_already_on_login_page() throws Throwable {
		 File f = new File("chromedriver.exe");
	     System.setProperty("webdriver.chrome.driver", f.getAbsolutePath());
	     System.out.println(f.getAbsolutePath());
		 driver= new ChromeDriver();
		 driver.manage().window().maximize();
		 driver.get("http://ad2eed866102711eaa9240699a9b962e-559864736.ap-southeast-1.elb.amazonaws.com:8080/spc/login");
	}

	@When("^Title of Atlas$")
	public void title_of_Atlas() throws Throwable
	{
	   String title=driver.getTitle();
	   System.out.println(title);
	   Assert.assertEquals("Atlas - Service Provider Console", title);
	}
//1. \"(.*)\"
	//@Then("^User enters username and password$")
	@Then("^User enters \"(.*)\" and \"(.*)\"$")
	public void user_enters_username_and_password(String username, String password) throws Throwable 
	{
		driver.findElement(By.cssSelector("#userName")).sendKeys(username);
		driver.findElement(By.cssSelector("#password")).sendKeys(password);	
	}

	@Then("^User clicks on login button$")
	public void user_clicks_on_login_button() throws Throwable 
	{
	    driver.findElement(By.xpath("//*[text()='Log In']")).click();
	    Thread.sleep(5000);
	}

	@Then("^user in on home page$")
	public void user_in_on_home_page() throws Throwable 
	{
	   WebElement element=driver.findElement(By.xpath("//h4[text()='Atlas']"));
	   WebElement invalid=driver.findElement(By.xpath("//div[text()='Invalid credentials!!']"));
	  try{
		  if(element.isDisplayed())
		   {
			   System.out.println("Logged in success");
		   }
		   else if(invalid.isDisplayed())
		   {
			   System.out.println("login fail");
		   }
	  }
	  catch(Exception e)
	  {
		  System.out.println(e);
	  }
	  
	  
	  
		  	   
	   
	}

}
