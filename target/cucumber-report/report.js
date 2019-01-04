$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/PangramTest.feature");
formatter.feature({
  "name": "Validating if string is pangram",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Post a valid pangram string with 26 or more ASCII characters",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I make POST request with string \"abcdefghijklmnopqrstuvwxyz\"",
  "keyword": "Given "
});
formatter.match({
  "location": "PangramTest.i_make_POST_request_with_string(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify status code returned is 200, content type is \"application/json\" and response body \"pangram\" should contain \"true\"",
  "keyword": "Then "
});
formatter.match({
  "location": "PangramTest.i_verify_status_code_returned_is_content_type_is_and_response_body_should_contain(int,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Post a valid pangram string with 26 or more ASCII characters that starts with empty space",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I make POST request with string \" abcdefghijklmnopqrstuvwxyz\"",
  "keyword": "Given "
});
formatter.match({
  "location": "PangramTest.i_make_POST_request_with_string(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify status code returned is 200, content type is \"application/json\" and response body \"pangram\" should contain \"true\"",
  "keyword": "Then "
});
formatter.match({
  "location": "PangramTest.i_verify_status_code_returned_is_content_type_is_and_response_body_should_contain(int,String,String,String)"
});
formatter.result({
  "error_message": "java.lang.AssertionError: expected [true] but found [false]\r\n\tat org.testng.Assert.fail(Assert.java:96)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:776)\r\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:137)\r\n\tat org.testng.Assert.assertEquals(Assert.java:118)\r\n\tat org.testng.Assert.assertEquals(Assert.java:453)\r\n\tat org.testng.Assert.assertEquals(Assert.java:463)\r\n\tat com.pangram.step_definitions.PangramTest.i_verify_status_code_returned_is_content_type_is_and_response_body_should_contain(PangramTest.java:38)\r\n\tat ✽.I verify status code returned is 200, content type is \"application/json\" and response body \"pangram\" should contain \"true\"(src/test/resources/features/PangramTest.feature:9)\r\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Post an invalid pangram string with 26 or more ASCII characters",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I make POST request with string \"abcdefghijklmnopqrstuvwxyyy\"",
  "keyword": "Given "
});
formatter.match({
  "location": "PangramTest.i_make_POST_request_with_string(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify status code returned is 200, content type is \"application/json\" and response body \"pangram\" should contain \"false\"",
  "keyword": "Then "
});
formatter.match({
  "location": "PangramTest.i_verify_status_code_returned_is_content_type_is_and_response_body_should_contain(int,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Post an invalid pangram string with 26 or more ASCII characters with space instead of missing character",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I make POST request with string \"abcdefghijklmnopqrstuvwxy \"",
  "keyword": "Given "
});
formatter.match({
  "location": "PangramTest.i_make_POST_request_with_string(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify status code returned is 200, content type is \"application/json\" and response body \"pangram\" should contain \"false\"",
  "keyword": "Then "
});
formatter.match({
  "location": "PangramTest.i_verify_status_code_returned_is_content_type_is_and_response_body_should_contain(int,String,String,String)"
});
formatter.result({
  "error_message": "java.lang.AssertionError: expected [false] but found [true]\r\n\tat org.testng.Assert.fail(Assert.java:96)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:776)\r\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:137)\r\n\tat org.testng.Assert.assertEquals(Assert.java:118)\r\n\tat org.testng.Assert.assertEquals(Assert.java:453)\r\n\tat org.testng.Assert.assertEquals(Assert.java:463)\r\n\tat com.pangram.step_definitions.PangramTest.i_verify_status_code_returned_is_content_type_is_and_response_body_should_contain(PangramTest.java:38)\r\n\tat ✽.I verify status code returned is 200, content type is \"application/json\" and response body \"pangram\" should contain \"false\"(src/test/resources/features/PangramTest.feature:17)\r\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Post an invalid pangram string with less than 26 ASCII characters long",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I make POST request with string \"abcdefghijklmnopqrstuv\"",
  "keyword": "Given "
});
formatter.match({
  "location": "PangramTest.i_make_POST_request_with_string(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify status code returned is 404, content type is \"application/json\" and response body \"message\" should contain \"Not Enough Characters In String\"",
  "keyword": "Then "
});
formatter.match({
  "location": "PangramTest.i_verify_status_code_returned_is_content_type_is_and_response_body_should_contain(int,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.uri("src/test/resources/features/PangramTestSet.feature");
formatter.feature({
  "name": "Validating if string is pangram",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Post a valid pangram string with 26 or more ASCII characters",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I make POST request with string \"\u003cstring\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "name": "I verify status code returned is 200, content type is \"application/json\" and response body \"\u003ckey\u003e\" should contain \"\u003cvalue\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "string",
        "key",
        "value"
      ]
    },
    {
      "cells": [
        "abcdefghijklmnopqrstuvwxyz",
        "pangram",
        "true"
      ]
    },
    {
      "cells": [
        ".abcdefghijklmnopqrstuvwxyz",
        "pangram",
        "true"
      ]
    },
    {
      "cells": [
        "abcdefghijklmnopqrstuvwxyzABC",
        "pangram",
        "true"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Post a valid pangram string with 26 or more ASCII characters",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I make POST request with string \"abcdefghijklmnopqrstuvwxyz\"",
  "keyword": "Given "
});
formatter.match({
  "location": "PangramTest.i_make_POST_request_with_string(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify status code returned is 200, content type is \"application/json\" and response body \"pangram\" should contain \"true\"",
  "keyword": "Then "
});
formatter.match({
  "location": "PangramTest.i_verify_status_code_returned_is_content_type_is_and_response_body_should_contain(int,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Post a valid pangram string with 26 or more ASCII characters",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I make POST request with string \".abcdefghijklmnopqrstuvwxyz\"",
  "keyword": "Given "
});
formatter.match({
  "location": "PangramTest.i_make_POST_request_with_string(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify status code returned is 200, content type is \"application/json\" and response body \"pangram\" should contain \"true\"",
  "keyword": "Then "
});
formatter.match({
  "location": "PangramTest.i_verify_status_code_returned_is_content_type_is_and_response_body_should_contain(int,String,String,String)"
});
formatter.result({
  "error_message": "java.lang.AssertionError: expected [true] but found [false]\r\n\tat org.testng.Assert.fail(Assert.java:96)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:776)\r\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:137)\r\n\tat org.testng.Assert.assertEquals(Assert.java:118)\r\n\tat org.testng.Assert.assertEquals(Assert.java:453)\r\n\tat org.testng.Assert.assertEquals(Assert.java:463)\r\n\tat com.pangram.step_definitions.PangramTest.i_verify_status_code_returned_is_content_type_is_and_response_body_should_contain(PangramTest.java:38)\r\n\tat ✽.I verify status code returned is 200, content type is \"application/json\" and response body \"pangram\" should contain \"true\"(src/test/resources/features/PangramTestSet.feature:5)\r\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Post a valid pangram string with 26 or more ASCII characters",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I make POST request with string \"abcdefghijklmnopqrstuvwxyzABC\"",
  "keyword": "Given "
});
formatter.match({
  "location": "PangramTest.i_make_POST_request_with_string(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify status code returned is 200, content type is \"application/json\" and response body \"pangram\" should contain \"true\"",
  "keyword": "Then "
});
formatter.match({
  "location": "PangramTest.i_verify_status_code_returned_is_content_type_is_and_response_body_should_contain(int,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Post an invalid pangram string with 26 or more ASCII characters",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I make POST request with string \"\u003cstring\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "name": "I verify status code returned is 200, content type is \"application/json\" and response body \"\u003ckey\u003e\" should contain \"\u003cvalue\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "string",
        "key",
        "value"
      ]
    },
    {
      "cells": [
        "%bcdefghijklmnopqrstuvwxyZ",
        "pangram",
        "false"
      ]
    },
    {
      "cells": [
        "abcdefghijklmnopqrstuvwxyyyyy",
        "pangram",
        "false"
      ]
    },
    {
      "cells": [
        "$$cdefghijklmnopqrstuvwxyz",
        "pangram",
        "false"
      ]
    },
    {
      "cells": [
        "acdefghijklmnopqrstuvwx%%",
        "pangram",
        "false"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Post an invalid pangram string with 26 or more ASCII characters",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I make POST request with string \"%bcdefghijklmnopqrstuvwxyZ\"",
  "keyword": "Given "
});
formatter.match({
  "location": "PangramTest.i_make_POST_request_with_string(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify status code returned is 200, content type is \"application/json\" and response body \"pangram\" should contain \"false\"",
  "keyword": "Then "
});
formatter.match({
  "location": "PangramTest.i_verify_status_code_returned_is_content_type_is_and_response_body_should_contain(int,String,String,String)"
});
formatter.result({
  "error_message": "java.lang.AssertionError: expected [false] but found [true]\r\n\tat org.testng.Assert.fail(Assert.java:96)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:776)\r\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:137)\r\n\tat org.testng.Assert.assertEquals(Assert.java:118)\r\n\tat org.testng.Assert.assertEquals(Assert.java:453)\r\n\tat org.testng.Assert.assertEquals(Assert.java:463)\r\n\tat com.pangram.step_definitions.PangramTest.i_verify_status_code_returned_is_content_type_is_and_response_body_should_contain(PangramTest.java:38)\r\n\tat ✽.I verify status code returned is 200, content type is \"application/json\" and response body \"pangram\" should contain \"false\"(src/test/resources/features/PangramTestSet.feature:15)\r\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Post an invalid pangram string with 26 or more ASCII characters",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I make POST request with string \"abcdefghijklmnopqrstuvwxyyyyy\"",
  "keyword": "Given "
});
formatter.match({
  "location": "PangramTest.i_make_POST_request_with_string(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify status code returned is 200, content type is \"application/json\" and response body \"pangram\" should contain \"false\"",
  "keyword": "Then "
});
formatter.match({
  "location": "PangramTest.i_verify_status_code_returned_is_content_type_is_and_response_body_should_contain(int,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Post an invalid pangram string with 26 or more ASCII characters",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I make POST request with string \"$$cdefghijklmnopqrstuvwxyz\"",
  "keyword": "Given "
});
formatter.match({
  "location": "PangramTest.i_make_POST_request_with_string(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify status code returned is 200, content type is \"application/json\" and response body \"pangram\" should contain \"false\"",
  "keyword": "Then "
});
formatter.match({
  "location": "PangramTest.i_verify_status_code_returned_is_content_type_is_and_response_body_should_contain(int,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Post an invalid pangram string with 26 or more ASCII characters",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I make POST request with string \"acdefghijklmnopqrstuvwx%%\"",
  "keyword": "Given "
});
formatter.match({
  "location": "PangramTest.i_make_POST_request_with_string(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify status code returned is 200, content type is \"application/json\" and response body \"pangram\" should contain \"false\"",
  "keyword": "Then "
});
formatter.match({
  "location": "PangramTest.i_verify_status_code_returned_is_content_type_is_and_response_body_should_contain(int,String,String,String)"
});
formatter.result({
  "error_message": "java.lang.AssertionError: expected [200] but found [404]\r\n\tat org.testng.Assert.fail(Assert.java:96)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:776)\r\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:137)\r\n\tat org.testng.Assert.assertEquals(Assert.java:118)\r\n\tat org.testng.Assert.assertEquals(Assert.java:652)\r\n\tat org.testng.Assert.assertEquals(Assert.java:662)\r\n\tat com.pangram.step_definitions.PangramTest.i_verify_status_code_returned_is_content_type_is_and_response_body_should_contain(PangramTest.java:37)\r\n\tat ✽.I verify status code returned is 200, content type is \"application/json\" and response body \"pangram\" should contain \"false\"(src/test/resources/features/PangramTestSet.feature:15)\r\n",
  "status": "failed"
});
});