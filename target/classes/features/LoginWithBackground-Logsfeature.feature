@Sivaram
Feature: Login to the Leaftaps application and Verify the success message and Logout

Background:
Given Launch the browser 
And Load the URL
And Maximize the window
And Set the Session Timeout

@smoke 
Scenario: Login to the Leaftaps with Positive Case.
When Enter the userName as DemoCSR
And Enter the Password as crmsfa
And Click on the Login Button
Then Verify the Success Message

@sanity 
Scenario: Login to the Leaftaps with Negative Case.
When Enter the userName as DemoCSR1
And Enter the Password as crmsfa
And Click on the Login Button
But Verify the LoginError Message



 