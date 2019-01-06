package stepDefinitions;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class CreateLeadPage extends BaseSteps {

	public CreateLeadPage() {
		PageFactory.initElements(driver, this);
	}
	
	@FindBy(id="createLeadForm_companyName") WebElement CompanyName;
	@When("Enter company name as (.*)")
	public void enterCompanyName(String companyname){
		CompanyName.sendKeys(companyname);
	}
	
	@FindBy(id="createLeadForm_firstName") WebElement FirstName;
	@And("Enter first name as (.*)")
	public void enterFirstName(String firstname){
		FirstName.sendKeys(firstname);
	}

	@FindBy(id="createLeadForm_lastName") WebElement LastName;
	@And("Enter Last name as (.*)")
	public void enterLastName(String lastname){
		LastName.sendKeys(lastname);
	}

	@FindBy(className="smallSubmit") WebElement CreatLead_btn;
	@And("click on the Create Lead")
	public void clickCreateLead(){
		CreatLead_btn.click();	
	}

	@FindBy(id="viewLead_firstName_sp") WebElement FirstName_Lable;
	@Then("Verify the FirstName in ViewLead page as (.*)")
	public void verifyFirstName(String firstname){
		String Firstname=FirstName_Lable.getText();
		if(Firstname == firstname ){
			System.out.println("Name Matching");
		}
		else{
			System.out.println("Not Matching");
		}
	}



}
