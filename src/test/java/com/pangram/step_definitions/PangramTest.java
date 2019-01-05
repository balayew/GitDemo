package com.pangram.step_definitions;

import static io.restassured.RestAssured.given;
import static org.testng.Assert.assertEquals;

import com.pangram.utilities.ConfigurationReader;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import io.restassured.http.ContentType;
import io.restassured.path.json.JsonPath;
import io.restassured.response.Response;

public class PangramTest {

	Response response;
	String url;
	String postBody;
	JsonPath json;

	@Given("^I make POST request with string \"([^\"]*)\"$")
	public void i_make_POST_request_with_string(String str) {
		url = ConfigurationReader.getProperty("url");

		postBody = "{\"string\" :\"" + str + "\"}";
			
		response = given().accept(ContentType.JSON).and().contentType(ContentType.JSON).and().body(postBody).when()
				.post(url);
	}

	@Then("^I verify status code returned is (\\d+), content type is \"([^\"]*)\" and response body \"([^\"]*)\" should contain \"([^\"]*)\"$")
	public void i_verify_status_code_returned_is_content_type_is_and_response_body_should_contain(int respCode, String respType, String key, String respBody) {

		json = response.jsonPath();

		assertEquals(response.contentType(), respType);
		assertEquals(response.statusCode(), respCode);
		assertEquals(json.getString(key), respBody);
		assertEquals(json.getString(key), respBody);
		assertEquals(json.getString(key), respBody);
		//branch
		assertEquals(json.getString(key), respBody);

	}

}
