package stepDefinitions;

import java.io.FileReader;
import java.util.HashMap;
import java.util.Map;

import org.openqa.selenium.chrome.ChromeDriver;

import com.esotericsoftware.yamlbeans.YamlReader;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;

public class Hooks extends BaseSteps {
	
//@Before (value={"@smoke,@sanity"}) // Groping the tags and exec

@SuppressWarnings("unchecked")
@Before 
public void beforeExecutingScenario(Scenario sc) throws Exception{
	
	YamlReader reader = new YamlReader(new FileReader("./testdata/"+sc.getName()+".yml"));
	Object ymlOBjdata = reader.read();
	getymldata = new HashMap<String, String>();
	getymldata = (Map<String,String>) ymlOBjdata;
	
	
	System.setProperty("webdriver.chrome.driver", "./drivers/chromedriver.exe");
	driver = new ChromeDriver();
	System.out.println("ScenarioName: "+ sc.getName());
	System.out.println("ScenarioId: "+sc.getId());
}
//@After(value={"@Sivaram"})
@After
public void afterExecutingScenario(Scenario sc){
	System.out.println("ScenarioName: "+sc.getName());
	System.out.println("ScenarioId: "+sc.getId());
	System.out.println("ScenarioStatus: "+sc.getStatus().name());
	
	driver.close();
}


}
