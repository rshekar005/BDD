Feature: Login Feature of Atlas

#Without Examples keyword
#Scenario: Atlas Login Scenario

#Given User is already on login page
#When Title of Atlas 
#Then User enters username and password
#Then User enters "gmcare@goodmoney.com" and "654321"
#Then User clicks on login button
#And user in on home page


#With Examples keyword
Scenario Outline: Atlas Login Scenario

Given User is already on login page
When Title of Atlas 
#Then User enters username and password
Then User enters "<username>" and "<password>"
Then User clicks on login button
And user in on home page

Examples:
    | username | password |
    | gmcare@goodmoney.com | 654321 |
    | rshekar005@gmail.com | 123456 |
    
