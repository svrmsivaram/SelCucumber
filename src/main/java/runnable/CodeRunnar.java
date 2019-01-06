package runnable;

import org.junit.runner.RunWith;
import org.testng.annotations.AfterClass;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.DataProvider;
import org.testng.annotations.Test;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import cucumber.api.testng.CucumberFeatureWrapper;
import cucumber.api.testng.PickleEventWrapper;
import cucumber.api.testng.TestNGCucumberRunner;


@RunWith(Cucumber.class)
//@CucumberOptions(features={"./src/main/java/features/LoginWithBackground-Logsfeature.feature"}, glue="stepDefinitions")
//@CucumberOptions(features={"./src/main/java/features/"}, glue="stepDefinitions") --Inside feature folder all the features are executed 
@CucumberOptions(features={"./src/main/java/features/CreateLeadWithSceOutline.feature"}, //it will run only specified line item scenarios
//@CucumberOptions(features={"./src/main/java/features/LoginWithBackground-Logsfeature.feature","./src/main/java/features/CreateLeadWithSceOutline.feature"},
				 glue="stepDefinitions",
				 //dryRun=true  -- Using to Verify whether Step Definition is defined for all the Scenarios steps 
				 //strict=true -- Using to stop the execution when particular steps is fail otherwise allowing to Run.
				 plugin={"html:target/cucumber","pretty:target/pretty"}
				 //monochrome=true -- Using to view Console report with format without any special char. 
				 //tags={"@smoke"} // Include
				 //tags={"@smoke","@regression"} //'And' Case (Scenario should be smoke as well Regression)
				 //tags={"~@sanity"}  //Exclude
				//tags={"@sanity,@Basker"} //OR
				//tags = {"~@da"}
				)
public class CodeRunnar {
    private TestNGCucumberRunner testNGCucumberRunner;

    @BeforeClass(alwaysRun = true)
    public void setUpClass() throws Exception {
        testNGCucumberRunner = new TestNGCucumberRunner(this.getClass());
    }

    @Test(groups = "cucumber", description = "Runs Cucumber Scenarios", dataProvider = "scenarios")
    public void runScenario(PickleEventWrapper pickleWrapper, CucumberFeatureWrapper featureWrapper) throws Throwable {
        // the 'featureWrapper' parameter solely exists to display the feature file in a test report
        testNGCucumberRunner.runScenario(pickleWrapper.getPickleEvent());
    }

    /**
     * Returns two dimensional array of PickleEventWrapper scenarios with their associated CucumberFeatureWrapper feature.
     *
     * @return a two dimensional array of scenarios features.
     */
    @DataProvider
    public Object[][] scenarios() {
        return testNGCucumberRunner.provideScenarios();
    }

    @AfterClass(alwaysRun = true)
    public void tearDownClass() throws Exception {
        testNGCucumberRunner.finish();
    }
    
    



}