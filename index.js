const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const http = require("http");

app.get(/.*/, (req, res) => {
  /*  res.send(`
<html lang="en">
<head>
<meta charset="utf-8">
<title>Error</title>
</head>
<body>
    <script>
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
        var data = JSON.parse(this.responseText);
        document.querySelector("body").innerHTML += "<img style='width:100%;' src='"+data.file+"'>";
    }
    xhttp.open("GET", 'https://aws.random.cat/meow');
    xhttp.send();
    </script>
</body>
</html>
    `);*/
		const catResult = http.request('http://aws.random.cat/meow');
		const { file } = await catResult.body.json();
		res.send({ files: [file] });
    
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
