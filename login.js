this.WelcomePage = $page("Welcome Page",{
	loginBtn: ".button-login",

	clickLoginBtn: function () {
		this.loginBtn.click();
	}
});

this.LoginPage = $page("Login Page",{
	username: "input[name='login.username']",
	password: "input[name='login.password']",
	submit: ".button-login",

	load: function () {
    	return this.waitForIt();
  	},

  	loginAs: function (userName, password) {
    	this.username.typeText(userName);
    	this.password.typeText(password);
    	this.submit.click();
  	}
});

var welcomePage = new WelcomePage(driver);
welcomePage.clickLoginBtn();


var loginPage = new LoginPage(driver).load();
loginPage.loginAs("testuser@example.com","test123");