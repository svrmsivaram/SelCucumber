Feature: CreateLead on Leaftaps

Background:

Given Load the URL
And Maximize the window
And Set the Session Timeout
When Enter the userName
And Enter the Password
And Click on the Login Button
Then Verify the Success Message


Scenario Outline: CreateLead on Leaftaps (Positive Case)
Given click on the crm/sfa link
And click create lead
When Enter company name as <companyName>
And Enter first name as <firstName>
And Enter Last name as <lastName>
And click on the Create Lead
Then Verify the FirstName in ViewLead page as Sivaram

Examples:
|companyName |firstName|lastName|
|Fiserv      |Siva     |Sel     |
|TCS         |Bask     |Test    |

Scenario: CreateLead on Leaftaps (Positive Case)
Given click on the crm/sfa link
And click create lead
When Enter company name as temp
And Enter first name as first
And Enter Last name as lastName
And click on the Create Lead
Then Verify the FirstName in ViewLead page as Siva
