$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login_with_datadriven.feature");
formatter.feature({
  "line": 1,
  "name": "Login Feature of Atlas",
  "description": "",
  "id": "login-feature-of-atlas",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 3,
      "value": "#Without Examples keyword"
    },
    {
      "line": 4,
      "value": "#Scenario: Atlas Login Scenario"
    },
    {
      "line": 6,
      "value": "#Given User is already on login page"
    },
    {
      "line": 7,
      "value": "#When Title of Atlas"
    },
    {
      "line": 8,
      "value": "#Then User enters username and password"
    },
    {
      "line": 9,
      "value": "#Then User enters \"gmcare@goodmoney.com\" and \"654321\""
    },
    {
      "line": 10,
      "value": "#Then User clicks on login button"
    },
    {
      "line": 11,
      "value": "#And user in on home page"
    },
    {
      "line": 14,
      "value": "#With Examples keyword"
    }
  ],
  "line": 15,
  "name": "Atlas Login Scenario",
  "description": "",
  "id": "login-feature-of-atlas;atlas-login-scenario",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 17,
  "name": "User is already on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "Title of Atlas",
  "keyword": "When "
});
formatter.step({
  "comments": [
    {
      "line": 19,
      "value": "#Then User enters username and password"
    }
  ],
  "line": 20,
  "name": "User enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "User clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "user in on home page",
  "keyword": "And "
});
formatter.examples({
  "line": 24,
  "name": "",
  "description": "",
  "id": "login-feature-of-atlas;atlas-login-scenario;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 25,
      "id": "login-feature-of-atlas;atlas-login-scenario;;1"
    },
    {
      "cells": [
        "gmcare@goodmoney.com",
        "654321"
      ],
      "line": 26,
      "id": "login-feature-of-atlas;atlas-login-scenario;;2"
    },
    {
      "cells": [
        "rshekar005@gmail.com",
        "123456"
      ],
      "line": 27,
      "id": "login-feature-of-atlas;atlas-login-scenario;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 26,
  "name": "Atlas Login Scenario",
  "description": "",
  "id": "login-feature-of-atlas;atlas-login-scenario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 17,
  "name": "User is already on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "Title of Atlas",
  "keyword": "When "
});
formatter.step({
  "comments": [
    {
      "line": 19,
      "value": "#Then User enters username and password"
    }
  ],
  "line": 20,
  "name": "User enters \"gmcare@goodmoney.com\" and \"654321\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "User clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "user in on home page",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefinitions.user_is_already_on_login_page()"
});
formatter.result({
  "duration": 12568236700,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinitions.title_of_Atlas()"
});
formatter.result({
  "duration": 13640800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "gmcare@goodmoney.com",
      "offset": 13
    },
    {
      "val": "654321",
      "offset": 40
    }
  ],
  "location": "LoginStepDefinitions.user_enters_username_and_password(String,String)"
});
formatter.result({
  "duration": 230199800,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinitions.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 5103991000,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinitions.user_in_on_home_page()"
});
formatter.result({
  "duration": 117473600,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//div[text()\u003d\u0027Invalid credentials!!\u0027]\"}\n  (Session info: chrome\u003d79.0.3945.130)\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.5.3\u0027, revision: \u0027a88d25fe6b\u0027, time: \u00272017-08-29T12:42:44.417Z\u0027\nSystem info: host: \u0027DESKTOP-B2426KB\u0027, ip: \u0027172.16.2.54\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_202\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d79.0.3945.36 (3582db32b33893869b8c1339e8f4d9ed1816f143-refs/branch-heads/3945@{#614}), userDataDir\u003dC:\\Users\\RAJASE~1\\AppData\\Local\\Temp\\scoped_dir16808_552217107}, timeouts\u003d{implicit\u003d0, pageLoad\u003d300000, script\u003d30000}, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003ddismiss and notify, strictFileInteractability\u003dfalse, platform\u003dXP, proxy\u003dProxy(), goog:chromeOptions\u003d{debuggerAddress\u003dlocalhost:51267}, acceptInsecureCerts\u003dfalse, browserVersion\u003d79.0.3945.130, browserName\u003dchrome, javascriptEnabled\u003dtrue, platformName\u003dXP, setWindowRect\u003dtrue}]\nSession ID: 373cfdaf7ce43cc45cadd62db15b79ce\n*** Element info: {Using\u003dxpath, value\u003d//div[text()\u003d\u0027Invalid credentials!!\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:185)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:120)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:646)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:416)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:518)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:408)\r\n\tat stepDefinitions.LoginStepDefinitions.user_in_on_home_page(LoginStepDefinitions.java:58)\r\n\tat ✽.And user in on home page(login_with_datadriven.feature:22)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 27,
  "name": "Atlas Login Scenario",
  "description": "",
  "id": "login-feature-of-atlas;atlas-login-scenario;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 17,
  "name": "User is already on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "Title of Atlas",
  "keyword": "When "
});
formatter.step({
  "comments": [
    {
      "line": 19,
      "value": "#Then User enters username and password"
    }
  ],
  "line": 20,
  "name": "User enters \"rshekar005@gmail.com\" and \"123456\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "User clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "user in on home page",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefinitions.user_is_already_on_login_page()"
});
formatter.result({
  "duration": 11562884900,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinitions.title_of_Atlas()"
});
formatter.result({
  "duration": 7151100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "rshekar005@gmail.com",
      "offset": 13
    },
    {
      "val": "123456",
      "offset": 40
    }
  ],
  "location": "LoginStepDefinitions.user_enters_username_and_password(String,String)"
});
formatter.result({
  "duration": 182493200,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinitions.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 5080038300,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinitions.user_in_on_home_page()"
});
formatter.result({
  "duration": 33678200,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//h4[text()\u003d\u0027Atlas\u0027]\"}\n  (Session info: chrome\u003d79.0.3945.130)\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.5.3\u0027, revision: \u0027a88d25fe6b\u0027, time: \u00272017-08-29T12:42:44.417Z\u0027\nSystem info: host: \u0027DESKTOP-B2426KB\u0027, ip: \u0027172.16.2.54\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_202\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d79.0.3945.36 (3582db32b33893869b8c1339e8f4d9ed1816f143-refs/branch-heads/3945@{#614}), userDataDir\u003dC:\\Users\\RAJASE~1\\AppData\\Local\\Temp\\scoped_dir16840_1581004791}, timeouts\u003d{implicit\u003d0, pageLoad\u003d300000, script\u003d30000}, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003ddismiss and notify, strictFileInteractability\u003dfalse, platform\u003dXP, proxy\u003dProxy(), goog:chromeOptions\u003d{debuggerAddress\u003dlocalhost:51305}, acceptInsecureCerts\u003dfalse, browserVersion\u003d79.0.3945.130, browserName\u003dchrome, javascriptEnabled\u003dtrue, platformName\u003dXP, setWindowRect\u003dtrue}]\nSession ID: f13851ae46f04e08320537b8e2ea89f7\n*** Element info: {Using\u003dxpath, value\u003d//h4[text()\u003d\u0027Atlas\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:185)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:120)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:646)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:416)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:518)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:408)\r\n\tat stepDefinitions.LoginStepDefinitions.user_in_on_home_page(LoginStepDefinitions.java:57)\r\n\tat ✽.And user in on home page(login_with_datadriven.feature:22)\r\n",
  "status": "failed"
});
});