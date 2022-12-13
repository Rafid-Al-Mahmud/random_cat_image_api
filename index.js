const express = require('express')
const app = express()
const port = process.env.PORT || 3000;

app.get(/.*/, (req, res) => {
    res.send(`
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
        document.querySelector("body").innerHTML = "<img src='"+data.file+"'>";
    }
    xhttp.open("GET", 'http://aws.random.cat/meow');
    xhttp.send();
    </script>
</body>
</html>
    `);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
