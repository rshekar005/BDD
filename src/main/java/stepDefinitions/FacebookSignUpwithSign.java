package stepDefinitions;

import java.io.File;
import java.util.Map;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.DataTable;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class FacebookSignUpwithSign 
{
    WebDriver driver;
	@Given("^User enters facebook url$")
	public void user_enters_facebook_url() throws Throwable {
		File f = new File("chromedriver.exe");
	    System.setProperty("webdriver.chrome.driver", f.getAbsolutePath());
	    System.out.println(f.getAbsolutePath());
		 driver= new ChromeDriver();
		 driver.manage().window().maximize();
		 driver.get("https://www.facebook.com/");
		 
	}

	@When("^user is in facebook sign up page$")
	public void user_is_in_facebook_sign_up_page() throws Throwable {
	    WebElement element=driver.findElement(By.xpath("//i[@class='fb_logo img sp_RNXRBsVDn05 sx_43b207']"));
	    element.isDisplayed();
	}

	@Then("^User enters details$")
	public void user_enters_details(DataTable signuppage) throws Throwable {
		
	   for(Map<String,String> data : signuppage.asMaps(String.class, String.class))
	   {
		   driver.findElement(By.xpath("//input[@name='firstname']")).sendKeys(data.get("firstname"));
		   driver.findElement(By.xpath("//input[@name='lastname']")).sendKeys(data.get("surname"));
		   driver.findElement(By.xpath("//input[@name='reg_email__']")).sendKeys(data.get("Mobile_Number"));
		   driver.findElement(By.xpath("//input[@name='reg_passwd__']")).sendKeys(data.get("New_password"));
		   driver.navigate().refresh();
	   }	   
	   driver.close();
	}


}
