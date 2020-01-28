$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("E:/Git/BasicsBDD/src/main/java/Features/login_with_datatabale.feature");
formatter.feature({
  "line": 1,
  "name": "login into good money atlas",
  "description": "",
  "id": "login-into-good-money-atlas",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Atlas Login Scenario",
  "description": "",
  "id": "login-into-good-money-atlas;atlas-login-scenario",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "User is already on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Title of Atlas",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User enters username and password",
  "rows": [
    {
      "cells": [
        "gmcare@goodmoney.com",
        "654321"
      ],
      "line": 8
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user in on home page",
  "keyword": "And "
});
formatter.match({
  "location": "LoginwithDatatable.user_is_already_on_login_page()"
});
formatter.result({
  "duration": 14885454400,
  "status": "passed"
});
formatter.match({
  "location": "LoginwithDatatable.title_of_Atlas()"
});
formatter.result({
  "duration": 13424300,
  "status": "passed"
});
formatter.match({
  "location": "LoginwithDatatable.user_enters_username_and_password(DataTable)"
});
formatter.result({
  "duration": 338563700,
  "status": "passed"
});
formatter.match({
  "location": "LoginwithDatatable.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 110777900,
  "status": "passed"
});
formatter.match({
  "location": "LoginwithDatatable.user_in_on_home_page()"
});
formatter.result({
  "duration": 30317500,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//h4[text()\u003d\u0027Atlas\u0027]\"}\n  (Session info: chrome\u003d79.0.3945.130)\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.5.3\u0027, revision: \u0027a88d25fe6b\u0027, time: \u00272017-08-29T12:42:44.417Z\u0027\nSystem info: host: \u0027DESKTOP-B2426KB\u0027, ip: \u0027192.168.43.67\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_202\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d79.0.3945.36 (3582db32b33893869b8c1339e8f4d9ed1816f143-refs/branch-heads/3945@{#614}), userDataDir\u003dC:\\Users\\RAJASE~1\\AppData\\Local\\Temp\\scoped_dir17560_1995167893}, timeouts\u003d{implicit\u003d0, pageLoad\u003d300000, script\u003d30000}, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003ddismiss and notify, strictFileInteractability\u003dfalse, platform\u003dXP, proxy\u003dProxy(), goog:chromeOptions\u003d{debuggerAddress\u003dlocalhost:57417}, acceptInsecureCerts\u003dfalse, browserVersion\u003d79.0.3945.130, browserName\u003dchrome, javascriptEnabled\u003dtrue, platformName\u003dXP, setWindowRect\u003dtrue}]\nSession ID: daf3d01cb0645d6a123c75e7467aff48\n*** Element info: {Using\u003dxpath, value\u003d//h4[text()\u003d\u0027Atlas\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:185)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:120)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:646)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:416)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:518)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:408)\r\n\tat stepDefinitions.LoginwithDatatable.user_in_on_home_page(LoginwithDatatable.java:59)\r\n\tat ✽.And user in on home page(E:/Git/BasicsBDD/src/main/java/Features/login_with_datatabale.feature:10)\r\n",
  "status": "failed"
});
});