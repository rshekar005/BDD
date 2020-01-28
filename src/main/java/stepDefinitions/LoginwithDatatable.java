package stepDefinitions;

import java.io.File;
import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.DataTable;
import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class LoginwithDatatable 
{
	WebDriver driver;
	@Given("^User is already on login page$")
	public void user_is_already_on_login_page() 
	{ File f = new File("chromedriver.exe");
    System.setProperty("webdriver.chrome.driver", f.getAbsolutePath());
    System.out.println(f.getAbsolutePath());
	 driver= new ChromeDriver();
	 driver.manage().window().maximize();
	 driver.get("http://ad2eed866102711eaa9240699a9b962e-559864736.ap-southeast-1.elb.amazonaws.com:8080/spc/login");
		
	    
	}

	@When("^Title of Atlas$")
	public void title_of_Atlas() throws Throwable {
		 String title=driver.getTitle();
		   System.out.println(title);
		   Assert.assertEquals("Atlas - Service Provider Console", title);
	}

	//For Data table we need to provide DataTable class as argument with reference
	//Using that reference with the help raw() data from feature file will get retrieve
	//Using list reference we will get data one by one
	//Here data.get(row).get(colomn) will read data one by one.
	@Then("^User enters username and password$")
	public void user_enters_username_and_password(DataTable credentials) throws Throwable {
	   List<List<String>> data= credentials.raw();
	   driver.findElement(By.cssSelector("#userName")).sendKeys(data.get(0).get(0));
	   driver.findElement(By.cssSelector("#password")).sendKeys(data.get(0).get(1));
	}

	@Then("^User clicks on login button$")
	public void user_clicks_on_login_button()  {
		driver.findElement(By.xpath("//*[text()='Log In']")).click();
	    
	}

	@Then("^user in on home page$")
	public void user_in_on_home_page() throws InterruptedException  {
		Thread.sleep(5000);
		 WebElement element=driver.findElement(By.xpath("//h4[text()='Atlas']"));
		 Assert.assertEquals("Atlas", element.getText());
		 driver.close();
	}



}
