package stepDefinitions;

import cucumber.api.PendingException;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class TaggedHooksExample 
{
	@Before // It is like same as testng annotation @Beforeclass
	public void setUp()
	{
		System.out.println("Executes before every scenario");
	}
	
	@After  // It is like same as testng annotation @Afterclass
	public void tearDown()
	{
		System.out.println("Executes after every scenario");
	}
	
	@Before("@First")//It is like a @BeforeMethod Annotation method in TestNG
	public void beforeFirst()
	{
		System.out.println("Before first scenario");
	}
	
	@After("@First")//It is like a @AfterMethod Annotation method in TestNG
	public void afterFirst()
	{
		System.out.println("After first scenario");
	}
	

	@Before("@Second")
	public void beforeSecond()
	{
		System.out.println("Before Second scenario");
	}
	
	@After("@Second")
	public void afterSecond()
	{
		System.out.println("After Second scenario");
	}
	

	@Before("@Third")
	public void beforeThird()
	{
		System.out.println("Before third scenario");
	}
	
	@After("@Third")
	public void afterThirs()
	{
		System.out.println("After third scenario");
	}
	
	@Given("^this is the first step$")
	public void this_is_the_first_step() throws Throwable {
	   System.out.println("This is the first step");
	}

	@When("^this is the second step$")
	public void this_is_the_second_step() throws Throwable {
	   
		System.out.println("This is the second step");
	}

	@Then("^this is the third step$")
	public void this_is_the_third_step() throws Throwable {
	    System.out.println("This is the third step");
	}

}
