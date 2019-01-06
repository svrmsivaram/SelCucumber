package stepDefinitions;

import java.util.List;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import cucumber.api.DataTable;
import cucumber.api.java.en.And;
import cucumber.api.java.en.But;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LoginPage extends BaseSteps {

	public LoginPage(){		
		PageFactory.initElements(driver, this);
	}


	/*@Given ("Launch the browser")    -- Due to Page factory modal we have to move to @ Before
public void launchBrowser(){
	System.setProperty("webdriver.chrome.driver", "./drivers/chromedriver.exe");
	driver = new ChromeDriver();
}*/

	@And ("Load the URL")
	public void loadURL(){
		driver.get("http:www.leaftaps.com/opentaps");
	}

	@And ("Maximize the window")
	public void maximizeWindow(){
		driver.manage().window().maximize();
	}

	@And ("Set the Session Timeout")
	public void setTimeOut(){
		driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
	}

	@FindBy(id="username") WebElement Username;
	@When ("Enter the userName as (.*)")
	public void enterUserName(String userName){
		Username.sendKeys(userName);
	}

	@FindBy(id="password") WebElement Password;
	@And ("Enter the Password as (.*)")
	public void enterPassword(String passWord){
		Password.sendKeys(passWord);
	}
	
	
	//@FindBy(id="username") WebElement Usernameyml;
	@When ("Enter the userName")
	public void enterUserName(){
		Username.sendKeys(getymldata.get("username"));
	}

	//@FindBy(id="password") WebElement Password;
	@And ("Enter the Password")
	public void enterPassword(){
		Password.sendKeys(getymldata.get("password"));
	}

	@FindBy(className="decorativeSubmit") WebElement Login_Btn;
	@And("Click on the Login Button")
	public void clickLoginButton(){
		Login_Btn.click();
	}

	@FindBy(xpath="//div[@id='wrapper']/div/h2") WebElement SuccessMessage;
	@Then("Verify the Success Message")
	public void verifySuccessMessage(){
		String successMessage =SuccessMessage.getText();
		System.out.println(successMessage);
	}


	@FindBy(xpath="//div[@id='errorDiv']/p[2]") WebElement errormessage;
	@But("Verify the LoginError Message")
	public void verifyLoginErrorMessage(){
		String errorMessage =driver.findElementByXPath("//div[@id='errorDiv']/p[2]").getText();
		System.out.println(errorMessage);
	}


	@FindBy(id="username") WebElement user_name;
	@FindBy(id="password") WebElement pass;
	@When("Enter the userName and password")
	public void enterLoginCred(DataTable dt){
		List<List<String>> record =dt.raw();
		user_name.sendKeys(record.get(1).get(0));
		pass.sendKeys(record.get(1).get(0));
	}


}
