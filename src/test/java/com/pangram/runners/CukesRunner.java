package com.pangram.runners;

import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;

@CucumberOptions(
		plugin=  {"pretty", 
				"html:target/cucumber-report",
				"json:target/cucumber.json"
		},
		//tags="test",
		features= {"src/test/resources/features/"},
		glue="com/pangram/step_definitions"
		//dryRun=true
				)
public class CukesRunner extends AbstractTestNGCucumberTests {

}
