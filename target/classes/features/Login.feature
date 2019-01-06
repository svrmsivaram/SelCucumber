Feature: Login to the Leaftaps application and Verify the success message and Logout

Scenario: Login to the Leaftaps with Positive Case.
Given Launch the browser 
And Load the URL
And Maximize the window
And Set the Session Timeout
When Enter the userName as DemoCSR
And Enter the Password as crmsfa
And Click on the Login Button
Then Verify the Success Message




