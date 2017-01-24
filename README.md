# Galen tutorial through sample project

*Galen Framework* uses Selenium in order to open web browser and select the tested elements on page. It has a special language to describe the layout of web page for different browser sizes. You just need to define your own tags for devices and sizes and then using the galen spec language write checks for each element on page. The best way to test the layout is to check location and dimensions of elements relatively to each other.

Resources
=
Recommended install [Sublime Text 3](https://download.sublimetext.com/Sublime%20Text%20Build%203126.dmg)

Install [Syntax Highlighter for Galen Framework v2+](https://github.com/davidrv87/syntax-sublime-galen2)

The default configuration is in FireFox but:
  If you want test in Chrome, make sure to have the latest Chromedriver or install:
	webdriver-manager via npm
  ```
  $ npm install -g webdriver-manager
  ```

Sample project
=

This sample project is based on this [video tutorial](https://www.youtube.com/watch?v=2YsIXqDZM-M)

Run the tests locally 
=
  *For Desktop:
  ```
	galen test galen.test --htmlreport reports --filter "*Desktop*"
  ```
  *For Mobile:
  ```
	galen test galen.test --htmlreport reports --filter "*Mobile*"
  ```
  *Both:
  ```
  galen test galen.test --htmlreport reports 
  ```

Reports
=
To see the report just open the report.html inside ./reports

	$ open reports/report.html
