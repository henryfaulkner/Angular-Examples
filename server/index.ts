const request = require('request');
const express = require("express")

const port = process.env.PORT || 3001;

const app = express();

app.use(express.json())

app.get("/api/grid-data", (req, res) => {
  res.status(200).json(
    {
      "values": [
          {
              "name": "Allison",
              "gender": "female",
              "hype level": 10
          },
          {
              "name": "Henry",
              "gender": "male",
              "hype level": 6
          },
          {
              "name": "Tristan",
              "gender": "male",
              "hype level": 6
          }
      ]
    }
  )
})

app.listen(port, () => {
  console.log(`Server listening on ${port}`);
});