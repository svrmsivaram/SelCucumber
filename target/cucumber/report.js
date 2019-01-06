$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("./src/main/java/features/CreateLeadWithSceOutline.feature");
formatter.feature({
  "name": "CreateLead on Leaftaps",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "CreateLead on Leaftaps (Positive Case)",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "click on the crm/sfa link",
  "keyword": "Given "
});
formatter.step({
  "name": "click create lead",
  "keyword": "And "
});
formatter.step({
  "name": "Enter company name as \u003ccompanyName\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "Enter first name as \u003cfirstName\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "Enter Last name as \u003clastName\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "click on the Create Lead",
  "keyword": "And "
});
formatter.step({
  "name": "Verify the FirstName in ViewLead page as Sivaram",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "companyName",
        "firstName",
        "lastName"
      ]
    },
    {
      "cells": [
        "Fiserv",
        "Siva",
        "Sel"
      ]
    },
    {
      "cells": [
        "TCS",
        "Bask",
        "Test"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Load the URL",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginPage.loadURL()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Maximize the window",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPage.maximizeWindow()"
});
formatter.result({
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: failed to change window state to maximized, current state is normal\n  (Session info: chrome\u003d69.0.3497.100)\n  (Driver info: chromedriver\u003d2.33.506120 (e3e53437346286c0bc2d2dc9aa4915ba81d9023f),platform\u003dWindows NT 10.0.17134 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 1.38 seconds\nBuild info: version: \u00273.4.0\u0027, revision: \u0027unknown\u0027, time: \u0027unknown\u0027\nSystem info: host: \u0027GENIUS\u0027, ip: \u0027192.168.42.190\u0027, os.name: \u0027Windows 8.1\u0027, os.arch: \u0027x86\u0027, os.version: \u00276.3\u0027, java.version: \u00271.8.0\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.33.506120 (e3e53437346286c0bc2d2dc9aa4915ba81d9023f), userDataDir\u003dC:\\Users\\Genius\\AppData\\Local\\Temp\\scoped_dir1656_1094}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d69.0.3497.100, platform\u003dWIN8_1, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d}]\nSession ID: af8ec92d08197a44286b9ae406e332bc\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:167)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:671)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:694)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteWebDriverOptions$RemoteWindow.maximize(RemoteWebDriver.java:925)\r\n\tat stepDefinitions.LoginPage.maximizeWindow(LoginPage.java:36)\r\n\tat ✽.Maximize the window(./src/main/java/features/CreateLeadWithSceOutline.feature:6)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Set the Session Timeout",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPage.setTimeOut()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Enter the userName",
  "keyword": "When "
});
formatter.match({
  "location": "LoginPage.enterUserName()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Enter the Password",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPage.enterPassword()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Click on the Login Button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPage.clickLoginButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Verify the Success Message",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPage.verifySuccessMessage()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "CreateLead on Leaftaps (Positive Case)",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "click on the crm/sfa link",
  "keyword": "Given "
});
formatter.match({
  "location": "HomePage.clickCRMSFALink()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "click create lead",
  "keyword": "And "
});
formatter.match({
  "location": "HomePage.clickCreateLeadLink()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Enter company name as Fiserv",
  "keyword": "When "
});
formatter.match({
  "location": "CreateLeadPage.enterCompanyName(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Enter first name as Siva",
  "keyword": "And "
});
formatter.match({
  "location": "CreateLeadPage.enterFirstName(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Enter Last name as Sel",
  "keyword": "And "
});
formatter.match({
  "location": "CreateLeadPage.enterLastName(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "click on the Create Lead",
  "keyword": "And "
});
formatter.match({
  "location": "CreateLeadPage.clickCreateLead()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Verify the FirstName in ViewLead page as Sivaram",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateLeadPage.verifyFirstName(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Load the URL",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginPage.loadURL()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Maximize the window",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPage.maximizeWindow()"
});
formatter.result({
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: failed to change window state to maximized, current state is normal\n  (Session info: chrome\u003d69.0.3497.100)\n  (Driver info: chromedriver\u003d2.33.506120 (e3e53437346286c0bc2d2dc9aa4915ba81d9023f),platform\u003dWindows NT 10.0.17134 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 1.14 seconds\nBuild info: version: \u00273.4.0\u0027, revision: \u0027unknown\u0027, time: \u0027unknown\u0027\nSystem info: host: \u0027GENIUS\u0027, ip: \u0027192.168.42.190\u0027, os.name: \u0027Windows 8.1\u0027, os.arch: \u0027x86\u0027, os.version: \u00276.3\u0027, java.version: \u00271.8.0\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.33.506120 (e3e53437346286c0bc2d2dc9aa4915ba81d9023f), userDataDir\u003dC:\\Users\\Genius\\AppData\\Local\\Temp\\scoped_dir13084_10448}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d69.0.3497.100, platform\u003dWIN8_1, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d}]\nSession ID: 29da44185c11b2831aba532d242380db\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:167)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:671)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:694)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteWebDriverOptions$RemoteWindow.maximize(RemoteWebDriver.java:925)\r\n\tat stepDefinitions.LoginPage.maximizeWindow(LoginPage.java:36)\r\n\tat ✽.Maximize the window(./src/main/java/features/CreateLeadWithSceOutline.feature:6)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Set the Session Timeout",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPage.setTimeOut()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Enter the userName",
  "keyword": "When "
});
formatter.match({
  "location": "LoginPage.enterUserName()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Enter the Password",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPage.enterPassword()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Click on the Login Button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPage.clickLoginButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Verify the Success Message",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPage.verifySuccessMessage()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "CreateLead on Leaftaps (Positive Case)",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "click on the crm/sfa link",
  "keyword": "Given "
});
formatter.match({
  "location": "HomePage.clickCRMSFALink()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "click create lead",
  "keyword": "And "
});
formatter.match({
  "location": "HomePage.clickCreateLeadLink()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Enter company name as TCS",
  "keyword": "When "
});
formatter.match({
  "location": "CreateLeadPage.enterCompanyName(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Enter first name as Bask",
  "keyword": "And "
});
formatter.match({
  "location": "CreateLeadPage.enterFirstName(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Enter Last name as Test",
  "keyword": "And "
});
formatter.match({
  "location": "CreateLeadPage.enterLastName(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "click on the Create Lead",
  "keyword": "And "
});
formatter.match({
  "location": "CreateLeadPage.clickCreateLead()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Verify the FirstName in ViewLead page as Sivaram",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateLeadPage.verifyFirstName(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Load the URL",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginPage.loadURL()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Maximize the window",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPage.maximizeWindow()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Set the Session Timeout",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPage.setTimeOut()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter the userName",
  "keyword": "When "
});
formatter.match({
  "location": "LoginPage.enterUserName()"
});
formatter.result({
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: call function result missing \u0027value\u0027\n  (Session info: chrome\u003d69.0.3497.100)\n  (Driver info: chromedriver\u003d2.33.506120 (e3e53437346286c0bc2d2dc9aa4915ba81d9023f),platform\u003dWindows NT 10.0.17134 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 240 milliseconds\nBuild info: version: \u00273.4.0\u0027, revision: \u0027unknown\u0027, time: \u0027unknown\u0027\nSystem info: host: \u0027GENIUS\u0027, ip: \u0027192.168.42.190\u0027, os.name: \u0027Windows 8.1\u0027, os.arch: \u0027x86\u0027, os.version: \u00276.3\u0027, java.version: \u00271.8.0\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.33.506120 (e3e53437346286c0bc2d2dc9aa4915ba81d9023f), userDataDir\u003dC:\\Users\\Genius\\AppData\\Local\\Temp\\scoped_dir11752_20678}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d69.0.3497.100, platform\u003dWIN8_1, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d}]\nSession ID: 9d9f94cb4fc0f03345f6c1ccc9ec14c4\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:167)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:671)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:272)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.sendKeys(RemoteWebElement.java:96)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\r\n\tat com.sun.proxy.$Proxy20.sendKeys(Unknown Source)\r\n\tat stepDefinitions.LoginPage.enterUserName(LoginPage.java:60)\r\n\tat ✽.Enter the userName(./src/main/java/features/CreateLeadWithSceOutline.feature:8)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Enter the Password",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPage.enterPassword()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Click on the Login Button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPage.clickLoginButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Verify the Success Message",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPage.verifySuccessMessage()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "CreateLead on Leaftaps (Positive Case)",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "click on the crm/sfa link",
  "keyword": "Given "
});
formatter.match({
  "location": "HomePage.clickCRMSFALink()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "click create lead",
  "keyword": "And "
});
formatter.match({
  "location": "HomePage.clickCreateLeadLink()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Enter company name as temp",
  "keyword": "When "
});
formatter.match({
  "location": "CreateLeadPage.enterCompanyName(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Enter first name as first",
  "keyword": "And "
});
formatter.match({
  "location": "CreateLeadPage.enterFirstName(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Enter Last name as lastName",
  "keyword": "And "
});
formatter.match({
  "location": "CreateLeadPage.enterLastName(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "click on the Create Lead",
  "keyword": "And "
});
formatter.match({
  "location": "CreateLeadPage.clickCreateLead()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Verify the FirstName in ViewLead page as Siva",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateLeadPage.verifyFirstName(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
});