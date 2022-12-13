const express = require('express')
const app = express()
const port = process.env.PORT || 3000;

app.get(/.*/, (req, res) => {
  res.send(`
            <script>
            const xhttp = new XMLHttpRequest();
            xhttp.onload = function() {
                var data = JSON.parse(this.responseText);
                // document.querySelector("body").innerHTML +=
                // i+": "+data.bg+"<br>";
                document.body.style.background=data.bg;
                i++;
            }
            xhttp.open("GET", 'http://aws.random.cat/meow');
            xhttp.send();
            </script>
  `);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
