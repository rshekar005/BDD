package Runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)//Imported from junit
@CucumberOptions
(
	features= "E:/Git/BasicsBDD/src/main/java/Features",//Path of a feature
	glue={"stepDefinitions"},// Path of Step Definitions
	format= {"pretty","html:test-outout", "json:json_output/cucumber.json", "junit:junit_xml/cucumber.xml"}, //to generate different types of reporting(output)
	monochrome=true,//It will generate a console output in readable format.
    //strict=true,//It will fail execution if any pending steps are not there.(Example: If in step definition any test is missed then test execution fails)
    dryRun=false
)
public class TestRunner 
{
}
