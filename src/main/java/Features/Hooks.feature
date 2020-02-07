Feature: Facebook login test using hooks concept

Scenario: Login into Facebook with valid credentials

Given user is on login page
When user enters "rshekar005@gmail.com" and "shekar23"
Then user clicked on login button
Then user successfully logged in

Scenario: Login into Facebook with invalid credentials.

Given user is on login page
When user enters "rshekar005@gmail.com" and "shekar2372727"
Then user clicked on login button
Then user should not get logged in

