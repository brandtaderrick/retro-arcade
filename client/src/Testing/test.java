package Testing;


import static org.junit.Assert.assertEquals;

import java.util.concurrent.TimeUnit;

import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.Select;

public class test {

	static WebDriver driver;

//	Change your selenium driver path here
	static String pathChromeDriver="C:\\Users\\Jacob\\Desktop\\School\\Fall 21\\Com 319\\HW 4\\chromedriver.exe";
	static String pathLoginPage="http://coms-319-014.cs.iastate.edu/login";

	String userName="user_name";
	String password="password";
	String login_btn="login-btn";
	String selectState="selectState";
	String txtEmail="txtEmail";
	String txtPhone="txtPhone";
	String txtAddress="txtAddress";
	String btnValidate="btnValidate";
	String labelNotifytxtFinalResult="labelNotifytxtFinalResult";
	
	@BeforeClass
	public static void openBrowser()
	{
		System.setProperty("webdriver.chrome.driver", pathChromeDriver);
		driver= new ChromeDriver() ;
		driver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
	}

	@AfterClass
	public static void closeBrowser() {
		driver.quit();
	}

	@Test
	public void loginSuccessTest() throws InterruptedException {
		driver.get(pathLoginPage);
		driver.manage().window().maximize();
		driver.findElement(By.xpath("//input[@id='"+userName+"']")).sendKeys("dummy");
		driver.findElement(By.xpath("//input[@id='"+password+"']")).sendKeys("pass");
		//driver.findElement(By.xpath("//input[@class='"+login_btn+"']")).click();
		driver.findElement(By.className("login-btn")).click();
		//Select obj = new Select(driver.findElement(By.name("selectGender")));
		//obj.selectByValue("female");
		//Select obj2 = new Select(driver.findElement(By.name("selectState")));
		//obj2.selectByValue("hawaii");
		//driver.findElement(By.xpath("//input[@id='"+txtEmail+"']")).sendKeys("JGongora963@gmail.com");
		//driver.findElement(By.xpath("//input[@id='"+txtPhone+"']")).sendKeys("888-888-8888");
		//driver.findElement(By.xpath("//input[@id='"+txtAddress+"']")).sendKeys("Ames,IA");

		Thread.sleep(1000);
		//driver.findElement(By.xpath("//input[@id='"+btnValidate+"']")).click();

		String strMessage=driver.findElement(By.className("Pong")).getText();
		assertEquals("Failed test case", strMessage, "Pong");
	}
/*
	@Test
	public void loginFailedTest() throws InterruptedException {
		driver.get(pathLoginPage);
		driver.manage().window().maximize();
		driver.findElement(By.xpath("//input[@id='"+txtFirstName+"']")).sendKeys("Jacob");
		driver.findElement(By.xpath("//input[@id='"+txtLastName+"']")).sendKeys("Gongora");
		//driver.findElement(By.xpath("//input[@id='"+selectGender+"']")).sendKeys("Gongora");
		//driver.findElement(By.xpath("//input[@id='"+selectState+"']")).sendKeys("Gongora");
		driver.findElement(By.xpath("//input[@id='"+txtEmail+"']")).sendKeys("JGongora963@gmail.com");
		driver.findElement(By.xpath("//input[@id='"+txtPhone+"']")).sendKeys("888-888-8888");
		driver.findElement(By.xpath("//input[@id='"+txtAddress+"']")).sendKeys("test");

		Thread.sleep(1000);
		driver.findElement(By.id(btnValidate)).click();
		String strMessage=driver.findElement(By.xpath("//label[@id='"+labelNotifytxtFinalResult+"']")).getText();
		assertEquals("Failed test case", strMessage, "Error");
	}
*/



}
