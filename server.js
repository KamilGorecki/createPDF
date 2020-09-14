const puppeteer = require("puppeteer");


const createPDF = async() => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    const options = {
        path: 'pdf/new.pdf',
        format: 'A4'
    }
    await page.setContent(`
<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>HTML to PDF Example</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
</head>
<body>
  <div id="invoice">
    <h1>Our Invoice</h1>
  </div>
</body>
</html>
`)
    await page.pdf(options);
    await browser.close();

}
createPDF()