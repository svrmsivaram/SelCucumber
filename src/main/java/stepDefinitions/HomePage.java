package stepDefinitions;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;

public class HomePage extends BaseSteps {

	public HomePage() {
		PageFactory.initElements(driver, this);
	}
	
	@FindBy(linkText="CRM/SFA") WebElement CRMSFA_Link;
	@Given("click on the crm/sfa link")
	public void clickCRMSFALink(){
		CRMSFA_Link.click();
	}


	@FindBy(linkText="Create Lead") WebElement CreateLead_Link;
	@And("click create lead")
	public void clickCreateLeadLink(){
		CreateLead_Link.click();
	}


}
