Feature: CreateLead on Leaftaps

Background:
Given Launch the browser 
And Load the URL
And Maximize the window
And Set the Session Timeout
When Enter the userName as DemoCSR
And Enter the Password as crmsfa
And Click on the Login Button
Then Verify the Success Message


Scenario: CreateLead on Leaftaps (Positive Case)
Given click on the crm/sfa link
And click create lead
When Enter company name as Fiserv
And Enter first name as Sivaram
And Enter Last name as Sel
And click on the Create Lead
Then Verify the FirstName in ViewLead page as Sivaram

