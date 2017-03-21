  var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until,
    WebElement = webdriver.WebElement,
    WebElementPromise = webdriver.WebElementPromise,
    _driver;

WebElement.prototype.$ = function(cssSelector) {
  return this.findElement(By.css(cssSelector));
}

WebElementPromise.prototype.$ = function(cssSelector) {
  return this.findElement(By.css(cssSelector));
}

WebElement.prototype.$$ = function(cssSelector) {
  return this.findElements(By.css(cssSelector));
}

WebElementPromise.prototype.$$ = function(cssSelector) {
  return this.findElements(By.css(cssSelector));
}

_driver = new webdriver.Builder()
    .forBrowser('phantomjs')
    .withCapabilities({
      "browserName": "phantomjs",
      "phantomjs.binary.path": "./node_modules/phantomjs-prebuilt/lib/phantom/bin/phantomjs.exe"
    })
    .build();

function SnipRate() {}

function $(cssSelector) {
  var foundElement = _driver.findElement(By.css(cssSelector));
  return foundElement;
}

SnipRate.prototype.getUsdRate = function() {

  _driver.get('https://finance.ua/');

  function errorTermination(err) {
    console.log(err);
    _driver.quit();
  }
  /* $($("#table-currency-tab1").find("tbody").find("tr:first").find("td")[2]).text().trim()
  "27.1052" */
  // $("a[data-target=#table-currency-tab1]").click().then(function(){
  //     $("#table-currency-tab1").$("tbody").$("tr:first").$$("td").then(function(tds) {
  //       console.logo(tds[3].getText());
  //       _driver.quit();
  //     }, errorTermination)
  //   }, errorTermination);


  //console.log($("#table-currency-tab1").own().getText());
  // _driver.findElement(By.name('q')).sendKeys('webdriver');
  // _driver.findElement(By.name('btnG')).click();
  // _driver.wait(until.titleIs('webdriver - Google Search'), 1000);
  //$("a[data-target=#table-currency-tab1]").click().then(function(){
    _driver.findElement(By.xpath("/html/body/div[2]/div/div[1]/div[2]/div/h2/a[2]")).click().then(function (){
      _driver.findElement(By.xpath('//*[@id="table-currency-tab1"]/table/tbody/tr[1]/td[3]')).getText().then(function (value){
        console.log(value);
      
        _driver.takeScreenshot().then(
          function (image, err) {
              require('fs').writeFile('out3.png', image, 'base64', function(err) {
                if (err) {
                  console.log(err);
                }
              });
          });
        });
      });

    _driver.quit();
  };

module.exports = SnipRate;