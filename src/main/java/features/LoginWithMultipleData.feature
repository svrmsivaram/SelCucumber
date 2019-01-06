Feature: Login to the Leaftaps application and Verify the success message and Logout

Background:
Given Launch the browser 
And Load the URL
And Maximize the window
And Set the Session Timeout


Scenario: Login to the Leaftaps with (Positive Case).
When Enter the userName and password
|username|password|
|DemoCSR|crmsfa|
And Click on the Login Button
Then Verify the Success Message




 